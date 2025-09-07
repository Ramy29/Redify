import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          // Validate required environment variables
          if (!process.env.API) {
            console.error("API environment variable is not set");
            return null;
          }

          if (!credentials?.email || !credentials?.password) {
            console.error("Missing email or password");
            return null;
          }

          const response = await fetch(`${process.env.API}/auth/login`, {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: { 
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
          });

          // Validate API response status
          if (!response.ok) {
            console.error(`API request failed with status: ${response.status}`);
            return null;
          }

          const payload = await response.json();

          if (payload?.code === 200 && payload?.data) {
            return {
              id: payload.data.profile._id,
              email: payload.data.profile.email,
              name: `${payload.data.profile.first_name} ${payload.data.profile.last_name}`,
              accessToken: payload.data.accessToken,
              refreshToken: payload.data.refreshToken,
              user: payload.data.profile,
            };
          }

          console.error("Login failed:", payload?.message || "Unknown error");
          return null;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user, account }) => {
      // On first sign-in
      if (user && account) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.user = user.user;
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      // Attach needed data to the session
      if (token) {
        session.user = token.user;
        // Attach tokens to the session with explicit typing
        Object.assign(session, {
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        });
      }
      return session;
    },
  },
  
  // Additional security settings
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  
  jwt: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
  
  // Secret configuration
  secret: process.env.NEXTAUTH_SECRET,
};

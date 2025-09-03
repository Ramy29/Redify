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
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const payload = await response.json();

        if (payload?.code === 200 && payload?.data) {
          return {
            accessToken: payload.data.accessToken,
            refreshToken: payload.data.refreshToken,
            user: payload.data.profile,
          };
        }

        return null; // لو تسجيل الدخول فشل
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.user = user.user; // profile
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;
      // عشان لو محتاج تبعت التوكين من الـ session
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};

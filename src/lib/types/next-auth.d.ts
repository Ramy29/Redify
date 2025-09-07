import { DefaultUser } from "next-auth"

declare module "next-auth" {
  interface User extends DefaultUser {
    accessToken: string;
    refreshToken: string;
    user: {
      _id: string;
      first_name: string;
      last_name: string;
      email: string;
      status: "active" | "inactive" | "banned";
      role: "Customer" | "Admin" | "Seller";
      shipping_addresses: unknown[];
    };
  }

  interface Session {
    user: User['user'];
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    user: {
      _id: string;
      first_name: string;
      last_name: string;
      email: string;
      status: "active" | "inactive" | "banned";
      role: "Customer" | "Admin" | "Seller";
      shipping_addresses: unknown[];
    };
  }
}
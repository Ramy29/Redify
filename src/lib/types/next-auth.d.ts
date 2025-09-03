import NextAuth, { User } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
 
  interface User {
    accessToken:string;
    refreshToken:string;
    user :{ 
         _id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: "active" | "inactive" | "banned"; 
  role: "Customer" | "Admin" | "Seller"; 
  shipping_addresses: any[]
  }

  }

  interface Session {
    user : User['user']
  }
}


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {
    
  }
}
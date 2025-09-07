import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getBooks() {
  
  const response = await fetch(`${process.env.API}/book`)
  const payload = await response.json()
  const data = payload.data
  return data

}

export async function getSpecificProduct(_id: string) {
  try {
    // 1. Read the cookie (await is required in Next.js 15)
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("next-auth.session-token")?.value;

    if (!authCookie) throw new Error("No auth cookie found");

    const token = await decode({
      token: authCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    if (!token) throw new Error("Failed to decode token");

    const response = await fetch(`${process.env.API}/book/${_id}`, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`, // or token?.accessToken if stored elsewhere
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching specific product:", error);
    return null;
  }
}




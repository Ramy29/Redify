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
    // 1) Try to read NextAuth cookie (supports secure cookie name on Vercel)
    const cookieStore = await cookies();
    const authCookie =
      cookieStore.get("next-auth.session-token")?.value ??
      cookieStore.get("__Secure-next-auth.session-token")?.value ??
      null;

    let headers: Record<string, string> | undefined;
    if (authCookie) {
      const token = await decode({
        token: authCookie,
        secret: process.env.NEXTAUTH_SECRET!,
      });
      if (token?.accessToken) {
        headers = { Authorization: `Bearer ${token.accessToken}` };
      }
    }

    // 2) Fetch product; if no token, try without Authorization
    const response = await fetch(`${process.env.API}/book/${_id}`, {
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    // Some APIs return { data: {...} }
    return data?.data ?? data;
  } catch (error) {
    console.error("Error fetching specific product:", error);
    return null;
  }
}




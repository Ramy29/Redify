'use server'

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getCart() {
  try {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("next-auth.session-token")?.value;

    if (!authCookie) throw new Error("No auth cookie found");

    const token = await decode({
      token: authCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    if (!token) throw new Error("Failed to decode token");

    // 🛒 Fetch basket
    const response = await fetch(`${process.env.API}/basket`, {
      headers: { Authorization: `Bearer ${token.accessToken}` },
      cache: "no-store",
    });

    const payload = await response.json();

    let total = 0;
   

    // ⬇️ نلف على items ونطبع الريفرنس
   const itemsWithBooks = await Promise.all(
  payload.items.map(async (item: any) => {
    try {
      const bookRes = await fetch(`${process.env.API}/book/${item.book}`, {
        headers: { Authorization: `Bearer ${token.accessToken}` },
        cache: "no-store",
      });

      if (!bookRes.ok) {
        console.error(
          `❌ Failed to fetch book (${item.book}):`,
          bookRes.status
        );
        return {
          ...item,
          book: {
            title: "غير متاح",
            price: 0,
          },
          lineTotal: 0,
        };
      }

      let bookData;
      try {
        bookData = await bookRes.json();
      } catch (err) {
        console.error(
          `❌ Failed to parse JSON for book (${item.book}):`,
          err
        );
        return {
          ...item,
          book: {
            title: "غير متاح",
            price: 0,
          },
          lineTotal: 0,
        };
      }

      return {
        ...item,
        book: bookData,
        lineTotal: bookData.price * item.quantity,
      };
    } catch (err) {
      console.error(`❌ Unexpected error fetching book (${item.book}):`, err);
      return {
        ...item,
        book: {
          title: "غير متاح",
          price: 0,
        },
        lineTotal: 0,
      };
    }
  })
);

const filteredItems = itemsWithBooks.filter((item) => item.quantity > 0);

const cartWithBooks = {
  ...payload,
  items: filteredItems,
  total: filteredItems.reduce((acc, curr) => acc + curr.lineTotal, 0),
  cartLength: filteredItems.length
};

return cartWithBooks;


    return { ...payload, items: itemsWithBooks, total,
         cartLength: payload?.items?.length ?? 0
     };
  } catch (error) {
    console.error("❌ Error fetching cart:", error);
    return null;
  }
}

export async function addBook(data) {
  
  try {
      const cookieStore = await cookies();
    const authCookie = cookieStore.get("next-auth.session-token")?.value;

    if (!authCookie) throw new Error("No auth cookie found");

    const token = await decode({
      token: authCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    if (!token) throw new Error("Failed to decode token");
    const response = await fetch (`${process.env.API}/basket/item`,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
          Authorization: `Bearer ${token.accessToken}` ,
         'content-type':'application/json'
      }
    })
    const payload = await response.json()
    return payload
  } catch (error) {
     console.error(" Failed to add book:", error);
  throw error;
  }
}

export async function deleteProduct(data) {
    try {
      const cookieStore = await cookies();
    const authCookie = cookieStore.get("next-auth.session-token")?.value;

    if (!authCookie) throw new Error("No auth cookie found");

    const token = await decode({
      token: authCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    if (!token) throw new Error("Failed to decode token");
    const response = await fetch (`${process.env.API}/basket/item`,{
      method:'DELETE',
      body:JSON.stringify(data),
      headers:{
          Authorization: `Bearer ${token.accessToken}` ,
         'content-type':'application/json'
      }
    })
    const payload = await response.json()
    return payload
  } catch (error) {
     console.error(" Failed to delete book:", error);
  throw error;
  }
}

export async function checkout(data,id) {
  
  try {
     const cookieStore = await cookies();
    const authCookie = cookieStore.get("next-auth.session-token")?.value;

    if (!authCookie) throw new Error("No auth cookie found");

    const token = await decode({
      token: authCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });
     if (!token) throw new Error("Failed to decode token");
  const response = await fetch(`${process.env.API}/order/${id}`,{
    method: 'POST',
    body:JSON.stringify(data),
    headers : {
       Authorization: `Bearer ${token.accessToken}` ,
         'content-type':'application/json'
    }
  }) 

  const payload = await response.json()
  console.log('Checkout',payload);
  return {payload}
  } catch (error) {
    console.error("Checkout error:", error);
    throw error;
  }
}






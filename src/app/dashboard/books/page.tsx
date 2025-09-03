import React from 'react'
import AllBooks from './_components/all-books'
import { getBooks } from '@/lib/actions/dashboard/getProduct'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Redify | Books",
  description: "Collection of new and attractive books!",
};

export default async function page() {

    const books = await getBooks()
  return (
    <div className='overflow-hidden'><AllBooks
     books={books}
     />
     </div>
  )
}

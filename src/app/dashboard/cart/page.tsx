import React from 'react'
import Cart from './_components/table'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Redify | Cart",
  description: "List of items which you choice",
};

export default async function page() {
  return (
    <div><Cart/></div>
  )
}

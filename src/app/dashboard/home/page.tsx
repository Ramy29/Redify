import React from 'react'
import Categories from './_components/categories';
import Hero from './_components/hero';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Redify | Home",
  description: "Home of riders and relaxed people !",
};
export default function page() {
  return (
    <div>
      <Hero />
   <Categories/>

    </div>
  )
}

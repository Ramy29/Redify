import React from 'react'
import CommingSoon from './_components/comming-soon'
import { Metadata } from 'next';
// import { Raleway } from 'next/font/google'; // Unused import


export const metadata: Metadata = {
  title: "Redify | Comming soon",
  description: "Something Happen..!",
};


export default function page() {
  return (
    <div ><CommingSoon/></div>
  )
}

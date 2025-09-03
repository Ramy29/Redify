import React from 'react'
import AboutUs from './_components/aboutUs'
import { Metadata } from 'next';
import { Raleway } from 'next/font/google';


export const metadata: Metadata = {
  title: "Redify | Books",
  description: "Who is Redify!",
};


export default function page() {
  return (
    <div ><AboutUs/></div>
  )
}

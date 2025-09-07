import React from 'react'
import AboutUs from './_components/aboutUs'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Redify | About-us",
  description: "Who is Redify!",
};


export default function page() {
  return (
    <div ><AboutUs/></div>
  )
}

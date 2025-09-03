import RegisterForm from '@/lib/forms/register-form'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Redify | Register",
  description: "Enter to infinite world !",
};

export default function page() {
  return (
    <div><RegisterForm/></div>
  )
}

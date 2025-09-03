import ForgetPassForm from '@/lib/forms/forget-password'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Redify | Forget-password",
  description: "Lets going!",
};

export default function page() {
  return (
    <div><ForgetPassForm/></div>
  )
}

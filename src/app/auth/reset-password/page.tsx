import ResetPassForm from '@/lib/forms/reset-password'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Redify | Reset-password",
  description: "Protect your world !",
};

export default function page() {
  return (
    <div><ResetPassForm/></div>
  )
}

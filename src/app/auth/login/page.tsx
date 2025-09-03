import LoginForm from '@/lib/forms/login'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Redify | Login",
  description: "Welcome Back !",
};

export default function page() {
  return (
    <div><LoginForm/></div>
  )
}

'use client'

import Image from 'next/image'
import React from 'react'
import { success, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import RegisterUser from '../actions/auth/register-action';
import { toast } from 'sonner'
import { registerScheme, RegisterValue } from '../schemes/auth-scheme';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

export default function RegisterForm() {
  const router = useRouter()

  const form = useForm<RegisterValue>({
    resolver: zodResolver(registerScheme),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      role: 'Customer'
    }
  })

  const onsubmit = async (data: RegisterValue) => {
    const response = await RegisterUser(data)
    if (response.message == "Record created successfully") {
      toast.success('Account Created Successfully')
      router.push('/auth/login')
    }
    else toast.error(response.message);
  }

  // Animation variants
 const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98
  }
};
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='w-[550px] h-[500px] flex flex-col justify-center items-center mt-16 ml-4'
    >
      <motion.div variants={itemVariants}>
        <h1><BookOpen size={80} className='text-chart-3' /></h1>
      </motion.div>

      {/* Heading */}
      <motion.div variants={itemVariants} className='w-60 h-20 -ml-36 my-5'>
        <h1 className='font-semibold text-2xl text-ring auth-title'>Create new account</h1>
        <h1 className='font-bold text-2xl'>Register</h1>
      </motion.div>

      {/* Form */}
      <Form {...form}>
        <motion.form
          variants={containerVariants}
          onSubmit={form.handleSubmit(onsubmit)}
          className='space-y-2'
        >
          <motion.div variants={itemVariants} className='flex space-x-2'>
            {/* First Name */}
            <FormField
              control={form.control}
              name='first_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold text-[14px]'>Last Name</FormLabel>
                  <FormControl>
                    <Input type='string' placeholder='John Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name='last_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold text-[14px]'>First Name</FormLabel>
                  <FormControl>
                    <Input type='string' placeholder='John Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold text-[14px]'>E-Mail</FormLabel>
                  <FormControl>
                    <Input type='email' placeholder='John@mail.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Password */}
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold text-[14px]'>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='********' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Role */}
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold text-[14px]'>Role</FormLabel>
                  <FormControl>
                    <Input type='string' placeholder='Customer' {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={itemVariants} className='flex flex-col space-y-4 my-4'>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button className='w-full'>Register</Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href='/auth/login'>
                <Button className='w-full' variant='secondary'>Login</Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.form>
      </Form>
    </motion.div>
  )
}

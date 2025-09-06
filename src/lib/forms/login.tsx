'use client'


import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel,  FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import {signIn} from 'next-auth/react';
import { loginScheme, LoginValue } from '../schemes/auth-scheme';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';


export default function LoginForm() {

    const form = useForm<LoginValue>({
        resolver:zodResolver(loginScheme),
        defaultValues:{
            email: '',
            password: '',
            
           }  
    })


    const onsubmit =async (data:LoginValue) =>{
     
      const response = await signIn('credentials',{
        callbackUrl:'/',
       email:data.email,
       password:data.password
      })
     
      console.log('response',response);
        console.log("data",data);
    }

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
  
  return (
    <>
     <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
     className='w-[550px] h-[500px] flex flex-col justify-center items-center  mt-16 ml-4'>
        <h1><BookOpen size={80} className='text-chart-3' /></h1>
        
        {/* Heading */}
        <motion.div
        variants={itemVariants}
        className='w-fit h-20 -ml-32  my-5'>
            <h1 className='font-semibold text-2xl text-ring auth-title'>Welcome to  Redify!</h1>
            <h1 className='font-bold text-2xl text-'>Login to your account</h1>
        </motion.div>

        {/* Form */}
         <Form {...form}>
            <motion.form
              variants={containerVariants}
            onSubmit={form.handleSubmit(onsubmit)} className='space-y-2'>
           
               {/* Email */}
                <FormField
                 control={form.control}
                 name='email'
                 render={({field})=>(
                    <FormItem>
                        <FormLabel className='font-semibold text-[14px] '>E-Mail</FormLabel>
                        <FormControl>
                            <Input type='email' placeholder='John@mail.com' {...field}/>
                        </FormControl>
                    <FormMessage/>
                    </FormItem>
                 )}
                />

                {/* Password */}
                 <FormField
                 control={form.control}
                 name='password'
                 render={({field})=>(
                    <FormItem>
                        <FormLabel className='font-semibold text-[14px] '>Password</FormLabel>
                        <FormControl>
                            <Input type='password' placeholder='********' {...field}/>
                        </FormControl>
                    <FormMessage/>
                    </FormItem>
                 )}
                />

             <Link href='/auth/forget-password'>  
                <p className='text-chart-3 cursor-pointer text-sm'>Forget Password?</p>
             </Link>

                <motion.div
                variants={itemVariants}
                className='flex flex-col space-y-4 my-4'>
                <Button>Login</Button>
              <Link href='/auth/register'>  <Button className='w-full' variant='secondary'>Register</Button></Link>
                </motion.div>
               
        


            </motion.form>
         </Form>

     </motion.div>
    </>
  )
}

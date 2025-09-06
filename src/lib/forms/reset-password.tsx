'use client'


import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel,  FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import ResetPass from '../actions/auth/reset-pass';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { ResetPassScheme, ResetPassValue } from '../schemes/auth-scheme';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';


export default function ResetPassForm() {

  const router = useRouter()

    const form = useForm<ResetPassValue>({
        resolver:zodResolver(ResetPassScheme),
        defaultValues:{
            email: '',
            password: '',
            
           }  
    })


    const onsubmit = async (data:ResetPassValue) =>{
      const response = await ResetPass(data)
        if (response.message=='Record updated successfully') {
          toast.success('Password Updated Succesfuly')
           router.push('/auth/login')
        }
        else  toast.error('Invalid OTP')
          
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
        className='w-fit h-20 -ml-24  my-5'>
            <h1 className='font-semibold text-2xl text-ring auth-title'>Welcome back!</h1>
            <h1 className='font-bold text-2xl text-'>Reset Your Password Now !</h1>
        </motion.div>

        {/* Form */}
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onsubmit)} className='space-y-2'>
           
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

                  {/* Otp */}
                <FormField
                 control={form.control}
                 name='otp'
                 render={({field})=>(
                    <FormItem>
                        <FormLabel className='font-semibold text-[14px] '>OTP</FormLabel>
                        <FormControl>
                            <Input type='string' placeholder='******' {...field}/>
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
                            <Input type='string' placeholder='********' {...field}/>
                        </FormControl>
                    <FormMessage/>
                    </FormItem>
                 )}
                />


                <motion.div
                variants={itemVariants}
                className='flex flex-col space-y-4 my-4'>
                <Button>Submit</Button>
                 <Button className='w-full' variant='secondary'>Login</Button> 

                </motion.div>
               
  
            </form>
         </Form>

     </motion.div>
    </>
  )
}
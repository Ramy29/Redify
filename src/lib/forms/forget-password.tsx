'use client'

import React from 'react'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel,  FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import ForgetPass from '../actions/auth/forget-pass';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

const ForgetPassScheme = z.object({
  
  email: z.string().email({ message: "Invalid email address" }),
})

type ForgetPassValue=z.infer<typeof ForgetPassScheme>

export default function ForgetPassForm() {

   const router = useRouter()

    const form = useForm<ForgetPassValue>({
        resolver:zodResolver(ForgetPassScheme),
        defaultValues:{
            email: '',
           }  
    })


    const onsubmit = async (data:ForgetPassValue) =>{
        const response = await ForgetPass(data)
        if (response.message=='Reset password email sent') {
          toast.success('OTP Sent Succesfuly')
          router.push('/auth/reset-password')
        }
        else  toast.error('Invalid Email')
        console.log(response);
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
         className='w-fit h-20 -ml-28  my-5'>
            <h1 className='font-semibold text-2xl text-ring auth-title'>Welcome back!</h1>
            <h1 className='font-bold text-2xl text-'>Forget Password  !!</h1>
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
                            <Input className='w-80' type='email' placeholder='John@mail.com' {...field}/>
                        </FormControl>
                    <FormMessage/>
                    </FormItem>
                 )}
                />


                <motion.div
                variants={itemVariants}
                className='flex flex-col space-y-4 my-4'>
              <Button  className='w-full' >Send</Button>
                </motion.div>
               
        


            </form>
         </Form>

     </motion.div>
    </>
  )
}
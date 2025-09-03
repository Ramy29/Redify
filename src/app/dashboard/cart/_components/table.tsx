"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from "framer-motion";
import { ShoppingCart, Trash } from 'lucide-react'
import { toast } from 'sonner'
import Shipping from './shipping'
import { useDeleteProduct, useCart } from "../hooks/cart-hook"; 
import CheckoutForm from "./shipping";
import Loader from "../../_components/Loader";

export default function Cart() {
  
  const { data: cart, isLoading } = useCart()
  const { mutate: deleteProduct, isPending } = useDeleteProduct()

  if (isLoading) return <Loader/>
  if (!cart) return <p>No cart found</p>

  const handleDelete = (bookId: string) => {
    deleteProduct(
      { book: bookId },
      {
        onSuccess: () => toast.success("Product deleted from cart successfully"),
        onError: () => toast.error("Failed to delete product"),
      }
    )
  }

  return (
   <div className='overflow-hidden'>
    <div className='container mx-auto my-4 w-full flex flex-col lg:flex-row gap-6 px-2'>

        {/* Content Of Cart */}
        <motion.div
         initial={{ x:'-300vh'  }}
         animate={{ x:0 }}
         transition={{ duration: 1 }}
         className='w-full lg:w-[730px] rounded-xl shadow-2xl text-chart-3 flex flex-col gap-2.5 p-4 sm:p-6'
style={{
background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
}}

        >
            <h1 className='font-semibold text-xl sm:text-2xl text-chart-3'>Products Details</h1>
            <div className='w-full h-[1px] bg-ring'></div>
    
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className='text-chart-3'>
                    <TableHead>Count</TableHead>
                    <TableHead>Book</TableHead>
                    <TableHead className="w-[100px]">Author</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Subtotal</TableHead>
                    <TableHead className="">Delete</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.items.map((item) => (
                    <TableRow key={item.book._id}>
                      <TableCell className='flex gap-1'>
                        <p className='w-6 h-6 p-6'>{item.quantity}</p>
                      </TableCell>
                      <TableCell>
                        <Image src='/images/cart.jpg' alt='Book Image' width={40} height={40}/>
                      </TableCell>
                      <TableCell className="font-medium">{item.book.author}</TableCell>
                      <TableCell className="text-right">{item.book.price}</TableCell>
                      <TableCell className="text-right">{item.quantity * item.book.price}</TableCell>
                      <TableCell  
                        onClick={()=>handleDelete(item.book._id)} 
                        className="text-right cursor-pointer"> 
                        <Trash className='ml-4 text-red-700' />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
        </motion.div>

        {/* Check out */}
        <motion.div
         initial={{ x:'300vh'  }}
         animate={{ x:0 }}
         transition={{ duration: 1 }}
         className="w-full lg:w-80 flex flex-col items-center"
        >
          <div className='w-full rounded-xl text-chart-3 shadow-xl p-4 sm:p-6'
            style={{
background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
}}
          >
            <h1 className='font-semibold text-xl sm:text-2xl border-b border-ring pb-2'>Cart Total Cost</h1>
            <div className='w-full h-[1px] bg-ring'></div>

            <TableFooter className='mt-4'>
              <TableRow className='border border-b-4 border-ring'>
                <TableCell className='w-64 ' colSpan={3}>Total</TableCell>
                <TableCell className="text-right">{cart.total} $</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell colSpan={3}>Tax</TableCell>
                <TableCell className="text-right">{cart.total * 0.15} $</TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={3}>Shipping</TableCell>
                <TableCell className="text-right">12 $</TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={3}>Total Cost</TableCell>
                <TableCell className="text-right">
                  {cart.total + cart.total * 0.15 + 12} $
                </TableCell>
              </TableRow>
            </TableFooter>
          </div>
          <Button className='lg:w-full mt-5 bg-chart-3'>Proceed <ShoppingCart /></Button>
        </motion.div>
    </div>
    <CheckoutForm/>
   </div> 
  )
}



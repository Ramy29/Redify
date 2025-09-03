import React from 'react'
import BookDetails from '../_components/book-details'
import { getSpecificProduct } from '@/lib/actions/dashboard/getProduct';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function page({params}:PageProps) {
    const {id} =  params
 const bookDetails = await getSpecificProduct(id)

  return (
    <div><BookDetails bookDetails={bookDetails}/></div>
  )
}


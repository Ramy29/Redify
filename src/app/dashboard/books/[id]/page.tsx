import React from "react";
import BookDetails from "../_components/book-details";
import { getSpecificProduct } from "@/lib/actions/dashboard/getProduct";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 
  const bookDetails = await getSpecificProduct(id);

  return (
    <div>
      <BookDetails bookDetails={bookDetails} />
    </div>
  );
}




"use client"

import { addBook, deleteProduct, getCart } from "@/lib/actions/dashboard/Cart"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

// 🟢 cart query
export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  })
}

// 🟢 addBook mutation
export function useAddBook() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      // اعمل refresh للـ cart
      queryClient.invalidateQueries({ queryKey: ["cart"] })
    },
  })
}

// 🟢 deleteProduct mutation
export function useDeleteProduct() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] })
    },
  })
}


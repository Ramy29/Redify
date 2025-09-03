'use client'

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51Rzb4zCOiEjbFq7dLnouInOiXpXlU4rtP9AsEJn5vkGfXtjTerfdu3edQ3bJbXL0JK8KwHV6mQP1zN0Gtp0HzqqI00mTBNT89f"
);

export default function StripeProvider({ children }: { children: React.ReactNode }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}


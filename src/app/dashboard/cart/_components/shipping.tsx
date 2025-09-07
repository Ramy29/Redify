"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CardElement,
  AddressElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useCart } from "../hooks/cart-hook";
import { checkout } from "@/lib/actions/dashboard/Cart";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function CheckoutForm() {
  const { data: cart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  if (!cart?._id) {
    return <p className="text-center mt-6 text-muted-foreground">Loading cart...</p>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const addressElement = elements.getElement(AddressElement);

    if (!cardElement || !addressElement) return;

    const addressResult = await addressElement.getValue();
    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      console.error("Stripe error:", error);
      toast.error("Something went wrong with your card");
      return;
    }

    if (addressResult.complete) {
      if (!token?.id) {
        toast.error("Payment token not generated. Please try again.");
        return;
      }
      const data = {
        token: token.id,
        delivery_address: {
          country: addressResult.value.address.country,
          city: addressResult.value.address.city,
          state: addressResult.value.address.state,
          building: 1,
          street: "ayhaga",
          floor: 1,
          appartment: 1,
          mobile: addressResult.value.phone,
          additional_info: "ayhaga",
          location: {
            type: "Point",
            coordinates: [30.0444, 31.2357],
          },
        },
      };

      try {
        setLoading(true);
        const res = await checkout(data, cart._id);
        if (res?.success === false) {
          toast.error(res?.message ?? "Checkout failed. Please try again.");
          return;
        }
        toast.success("Your order has been submitted 🎉");
        window.location.reload();
      } catch (err) {
        console.error("Checkout failed:", err);
        toast.error("Checkout failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Card className="max-w-lg mx-auto mt-12 shadow-lg border rounded-2xl">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold text-chart-3">
          Secure Checkout
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Enter your payment and shipping details
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Input */}
          <div className="p-4 border rounded-xl shadow-sm bg-muted/30">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#1f2937",
                    "::placeholder": { color: "#9ca3af" },
                  },
                },
              }}
            />
          </div>

          {/* Address Input */}
          <div className="p-4 border rounded-xl shadow-sm bg-muted/30">
            <AddressElement
              options={{
                mode: "shipping",
                fields: { phone: "always" },
                defaultValues: {
                  address: {
                    country: "EG",
                    city: "Giza",
                    state: "Giza",
                    line1: "ayhaga",
                  },
                },
              }}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full py-5 text-lg font-semibold" disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin h-5 w-5" /> Processing...
              </span>
            ) : (
              "Pay Now"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}



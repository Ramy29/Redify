"use client";

import * as React from "react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket,Info } from "lucide-react";
import { toast } from "sonner";


export default function EmailDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost"
         className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2 rounded-xl shadow-md hover:opacity-90 transition"
        >
          Book Now! <Rocket className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Book Now</DialogTitle>
          <p className="text-sm text-gray-400 text-center">
            Stay updated with the latest official books.
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <Label htmlFor="email" className="text-gray-300">
            Your Email
          </Label>
          <Input
            id="email"
            placeholder="example@mail.com"
            className="bg-gray-700 w-96"
          />
        </div>
        <p className="text-xs text-gray-400 flex items-center gap-1  italic -mt-5">
           <span className="text-blue-400"><Info /></span> 
            You will receive an email when the book is published
             </p>

        <DialogFooter className="flex justify-between">
          <Button
            variant="outline"
            className="cursor-pointer px-6 rounded-x  border-gray-500 text-gray-300 hover:bg-gray-700"
            onClick={() => {
              toast.error("Discard changes");
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            className="px-6 rounded-md"
            variant="ghost"
            onClick={() => {
              toast.success("We sent you an email!");
              setOpen(false);
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


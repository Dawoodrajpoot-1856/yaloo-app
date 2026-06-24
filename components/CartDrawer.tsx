"use client";

import React from "react";

import { Trash2, ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { removeFromCart } from "@/app/redux/cartSlice";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

export default function CartDrawer() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  // Total quantity calculation (Max 5 plans ka check render karne ke liye)
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Total Price calculation
  const totalPrice = cartItems.reduce((sum, item) => {
    // Price string se sirf number nikalne ke liye (e.g., "$15" -> 15)
    const numPrice = parseFloat(item.price.replace(/[^0-digit.]/g, "")) || 0;
    return sum + numPrice * item.quantity;
  }, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Cart</Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        {/* CONDITION: Agar cart empty hai */}
        {cartItems.length === 0 ? (
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart size={24} className="text-gray-400" />
            </div>
            <p className="text-gray-900 font-bold text-base mb-1">
              Your cart is empty
            </p>

            {/* Yeh bilkul sahi chalega kyunki yeh parent <Sheet> ke andar hai */}
            <SheetClose asChild>
              <Button className="bg-yellow-400 text-black">
                Explore Plans
              </Button>
            </SheetClose>
          </div>
        ) : (
          /* Baaki cart items ka code idhar */
          <div>Items list...</div>
        )}
      </SheetContent>
    </Sheet>
  );
}

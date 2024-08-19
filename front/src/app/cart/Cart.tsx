"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import CartComponent from "@/components/CartComponent/CartComponent";
import { UserContext } from "@/context/UserContext"; 

export const Cart = () => {
  const { isLogged } = useContext(UserContext); 
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
  }, [isLogged, router]);

  if (!isLogged) {
    return null;
  }

  return (
    <div className="container mx-auto py-4 mt-20 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-11/12">
        <div className="flex justify-center">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <CartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { UserContext } from "@/context/UserContext"; 
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function AddToCart({ id }: { id: number }) {
  const router = useRouter();
  const { addToCart } = useContext(CartContext);
  const { isLogged } = useContext(UserContext); 

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (!isLogged) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Necesitas acceder para agregar productos al carrito",
      });
      return;
    }

    addToCart(id);
    Swal.fire({
      icon: "success",
      title: "Tu producto se agregó al carrito",
    });
    router.push("/cart");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
    >
      agregar al carrito
    </button>
  );
}

export default AddToCart;

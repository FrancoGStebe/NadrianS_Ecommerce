import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import CartItem from "@/components/CartItmes/CartItems";
import { IProducts } from "@/interface/interfaces";
import Swal from "sweetalert2";

function CartComponent() {
    const { cartItems, removeFromCart, total, proceedToCheckout } = useContext(CartContext);

    const countMap: { [key: string]: number } = {};
    cartItems.forEach((item: IProducts) => {
        const itemId = item.id.toString(); 
        if (countMap[itemId]) {
            countMap[itemId]++;
        } else {
            countMap[itemId] = 1;
        }
    });

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            {cartItems.length > 0 ? (
                Object.keys(countMap).map((itemId) => {
                    const itemCount = countMap[itemId];
                    const item = cartItems.find((prod) => prod.id.toString() === itemId)!;
                    return (
                        <div key={itemId} className="mb-4 border-b border-gray-200 pb-4">
                            <CartItem products={item} quantity={itemCount} remove={() => removeFromCart(item.id)} />
                        </div>
                    );
                })
            ) : (
                <div className="p-4 text-gray-500">No tienes agregado ningún producto</div>
            )}
            {total > 0 && (
                <div className="mt-4">
                    <p className="font-bold text-lg">Total: ${total}</p>
                    <button
                        onClick={() => {
                            console.log("Checkout button clicked");
                            proceedToCheckout();
                            Swal.fire({
                                icon: "success",
                                title: "¡Muchas gracias!",
                                text: "¡Su producto está siendo preparado para ser despachado!",
                            });
                        }}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
                    >
                        Comprar
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartComponent;

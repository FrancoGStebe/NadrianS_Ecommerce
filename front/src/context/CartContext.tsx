"use client";

import { createContext, useState, useEffect } from "react";
import { IProducts, ICartContextType } from "@/interface/interfaces";
import { fetchProductById } from "@/lib/server/fetchProducts";

const addItem = async (
    cartItems: IProducts[],
    product: number,
): Promise<IProducts[]> => {
    const existProduct = cartItems.find((item) => item.id === product);

    if (existProduct) {
        return [...cartItems, existProduct];
    }

    const data = await fetchProductById(product.toString());
    return [...cartItems, data];
};

const removeItem = async (cartItems: IProducts[], product: number) => {
    return cartItems.filter((item) => item.id !== product);
};

export const CartContext = createContext<ICartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    total: 0,
    proceedToCheckout: () => {}
});

const checkout = async (cartItems: IProducts[]) => {
    try {
        const products = cartItems.map((item) => item.id);
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Token not found");
        }

        console.log("Sending request with products:", products);

        const response = await fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify({ products })
        });

        if (response.ok) {
            console.log("Success");
        } else {
            const errorData = await response.json();
            console.log("Error response:", errorData);
        }
    } catch (error) {
        console.error("Error during checkout:", error);
    }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItem] = useState<IProducts[]>([]);
    const [total, setTotal] = useState(0);

    const addToCart = async (product: number) => {
        const updateCart = await addItem(cartItems, product);
        setCartItem(updateCart);
    };

    const proceedToCheckout = () => {
        console.log("Proceeding to checkout with items:", cartItems);
        checkout(cartItems);
        setCartItem([]);
    };

    const removeFromCart = async (productId: number) => {
        const updatedCartItems = await removeItem(cartItems, productId);
        setCartItem(updatedCartItems);
    };

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotal(total);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, total, proceedToCheckout }}>
            {children}
        </CartContext.Provider>
    );
};

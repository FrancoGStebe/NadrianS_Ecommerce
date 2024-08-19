"use client";
import { ILoginUser, ILoginUserResponse, IOrderResponse, IUser, IUserContext } from "@/interface/interfaces";
import { getUserOrders } from "@/lib/server/fetchOrders";
import { postSingIn, postSingUp } from "@/lib/server/fetchUser";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext<IUserContext>({
    user: null,
    setUser: () => {},
    isLogged: false,
    setIsLogged: () => {},
    singIn: async () => false,
    singUp: async () => false,
    getOrders: async () => {},
    orders: [],
    logOut: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<Partial<ILoginUserResponse> | null>(null);
    const [isLogged, setIsLogged] = useState(false);
    const [orders, setOrders] = useState<IOrderResponse[]>([]);

    const singUp = async (user: Omit<IUser, "id">) => {
        try {
            const data = await postSingUp(user);
            if (data.id) {
                await singIn({ email: user.email, password: user.password });
                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const singIn = async (credentials: ILoginUser) => {
        try {
            const data = await postSingIn(credentials);
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("token", data.token);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const getOrders = async () => {
        try {
            const token: string = localStorage.getItem("token") || "";
            const data = await getUserOrders(token);
            setOrders(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error(error);
            setOrders([]);
        }
    };

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setIsLogged(false);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogged(true);
        }
    }, [user]);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
            return;
        }
        setUser(null);
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLogged,
                setIsLogged,
                singIn,
                singUp,
                getOrders,
                orders,
                logOut,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

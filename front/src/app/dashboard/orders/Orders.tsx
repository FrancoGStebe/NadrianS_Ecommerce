"use client";
import { UserContext } from "@/context/UserContext";
import { useContext, useEffect } from "react";
import { IOrderResponse, IProducts } from "@/interface/interfaces";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const Orders = () => {
    const { getOrders, orders, isLogged, user } = useContext(UserContext);
    
    const router = useRouter();
    useEffect(() => {
        getOrders();
    }, []);

    useEffect(() => {
        if(!isLogged){
         Swal.fire("Por favor, debes iniciar sesión!");
         router.push("/auth-page")
        }
       }, [isLogged, router]);
     
       if (!user) {
         return <p>Cargando...</p>;
       }

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <div>
            <h1 className="text-2xl font-bold text-center mb-4">Perfil de Usuario</h1>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <p><strong>Nombre:</strong> {user?.user?.name}</p>
                <p><strong>Email:</strong> {user?.user?.email}</p>
            </div>
            </div>
            <h1 className="text-2xl font-bold text-center mb-4">Mis Compras</h1>
            <hr className="mb-4" />
            <div>
                {orders.length === 0 ? (
                    <h2 className="text-center text-lg text-gray-700">No tienes compras hechas</h2>
                ) : (
                    orders.map((order: IOrderResponse) => (
                        <div key={order.id} className="mb-8">
                            <div>
                                {order.products.map((product: IProducts) => (
                                    <div key={product.id} className="flex items-center mt-4">
                                        <img src={product.image} alt={product.name} className="max-w-32 mr-4" />
                                        <div>
                                            <h3 className="text-lg font-semibold">Producto: {product.name}</h3>
                                            <p className="text-gray-600">Descripción: {product.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                Fecha: {new Date(order.date).toLocaleDateString()}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Orders;

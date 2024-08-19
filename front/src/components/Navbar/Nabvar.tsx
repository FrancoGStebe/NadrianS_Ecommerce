"use client";

import Link from 'next/link';
import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const {isLogged, setIsLogged} = useContext(UserContext);
    

    const handleLogout = () => {
        Swal.fire({
          title: "¿Estás seguro?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, salir",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setIsLogged(false);
    
            Swal.fire({
              title: "¡Cerraste sesión!",
              text: "Has cerrado sesión correctamente.",
              icon: "success"
            });
          router.push("/home");
          }
        });
      };
    
      
    return (
        <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" aria-current="page">
                            <img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Logo" />
                            <p className="sr-only">Website Title</p>
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                        <Link href="/home" aria-current="page" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                            Inicio
                        </Link>
                        <Link href="/products" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                            Productos
                        </Link>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        {isLogged ? (
                            <>
                                <Link href="/dashboard" className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50">
                                    Perfil
                                </Link>
                                <Link href="/cart" className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50">
                                    Carrito
                                </Link>
                                <button onClick={handleLogout} className="inline-flex items-center justify-center rounded-xl bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-red-600 focus-visible:outline focus-visible:ring focus-visible:ring-red-800 focus-visible:ring-opacity-50">
                                    Salir
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/auth-page" className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50">
                                    Registro
                                </Link>
                                <Link href="/auth-page" className="inline-flex items-center justify-center rounded-xl bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-600 focus-visible:outline focus-visible:ring focus-visible:ring-green-800 focus-visible:ring-opacity-50">
                                    Acceso
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

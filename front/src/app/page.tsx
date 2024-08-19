import React from 'react';

export default function LandingPage() {
  return (
    <div className="flex h-screen">
      
      <div className="w-1/2 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Nadrian'S</h1>
        <p className="text-lg mb-6">Descubre nuestras ofertas exclusivas y encuentra lo que necesitas.</p>
        <a href="/home" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
          Conoce mas
        </a>
        <p className="text-sm text-gray-600 mt-2">Fundada en 2021</p>
      </div>

      
      <div className="w-1/2 bg-cover bg-center">
        <img src="/imagenes/Landing.jpg" alt="Imagen de la derecha" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

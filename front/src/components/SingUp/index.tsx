"use client";

import { useState, useContext } from 'react';
import React from 'react';
import { validateRegister, RegisterErrors } from "@/helpers/validateRegister";
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export const SignUp = () => {
  const router = useRouter();
  const { singUp } = useContext(UserContext);

  const [signUpValue, setSignUp] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    name: "",
    address: "",
    phone: ""
  });

  const [errors, setErrors] = useState<RegisterErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUp({ ...signUpValue, [name]: value });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };
    const tempValues = { ...signUpValue, [name]: value };
    const fieldErrors = validateRegister(tempValues);

    if (fieldErrors[name as keyof RegisterErrors]) {
      newErrors[name as keyof RegisterErrors] = fieldErrors[name as keyof RegisterErrors];
    } else {
      delete newErrors[name as keyof RegisterErrors];
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateRegister(signUpValue);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const user = {
        email: signUpValue.email,
        password: signUpValue.password,
        name: signUpValue.name,
        address: signUpValue.address,
        phone: signUpValue.phone,
      };
      const respuesta = await singUp(user);

      if (respuesta) {
        Swal.fire({
          icon: "success",
          title: "bienvenido",
          text: "Disfrute de lo mejor!",
        });
        router.push("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tus Credenciales no son correctas!",
        });
      }
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-10 mx-4" style={{ backgroundColor: '#dff9e2', maxWidth: '450px' }}>
      <h1 className="text-4xl font-bold text-center mb-8 border-b-4 border-black">Regístrate</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative z-0 w-full group">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300"
            placeholder="Correo electrónico"
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300"
            placeholder="Contraseña"
            required
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="password"
            name="repeatPassword"
            onChange={handleChange}
            className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300"
            placeholder="Confirmar contraseña"
            required
          />
          {errors.repeatPassword && <p className="text-red-500 text-xs mt-1">{errors.repeatPassword}</p>}
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300"
            placeholder="Nombre"
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300"
            placeholder="Número de teléfono"
            required
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="address"
            onChange={handleChange}
            className="block py-3 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300"
            placeholder="Dirección"
            required
          />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default SignUp;

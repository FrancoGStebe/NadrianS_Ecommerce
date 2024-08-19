import React from "react";

export interface IRegisterUser {
name: string;
email:string;
password:string;
address:string;
phone: string;
}

export interface IRegisterUserResponse {
  name: string;
  email:string;
  password:string;
  address:string;
  phone: string;
  role: string;
  credential: ICreadential;
  }

  export interface ICreadential {
  password: string;
  id: number;
}

export interface ICreateOrder {
  userId: number;
  products: number[];
}

export interface ILoginUser {
  email: string
  password: string
}

export interface IProducts {
    id:number;
    name:string;
    description:string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
  }

  export interface IUser {
    id: number;
    name: string;
    email:string;
    password:string;
    address:string;
    phone: string;
    role?: string;
    credential?: ICreadential;
    orders?: IOrderResponse[];
  }

  export interface ILoginUserResponse {
    loggin: boolean;
    user: Partial<IUser> | null;
    token: string;
  }

  export interface IproductsProps {
    products: IProducts[];
  }

  export interface IUserContext {
    user: Partial<ILoginUserResponse> | null,
    setUser: React.Dispatch<React.SetStateAction<Partial<ILoginUserResponse> | null>>,
    isLogged: boolean,
    setIsLogged: (isLogged: boolean) => void,
    singIn: (credentials: ILoginUser) => Promise<boolean>,
    singUp: (user: Omit<IRegisterUser, "id">)=> Promise<boolean>,
    getOrders: () => void,
    orders: IOrderResponse[] | [],
    logOut: () => void,
  }

  export interface ICartContextType {
    cartItems: IProducts[];
    addToCart: (products: number) => void,
    removeFromCart: (products: number) => void,
    total: number,
    proceedToCheckout: () => void,
  }

  export interface IOrderProps {
    order: IOrderResponse, 
  }

  export interface IOrderResponse {
    id: number,
    status: string,
    date: string,
    user: IUser,
    products: IProducts[],  
  }

  export interface IProductsCartProps {
    products: IProducts,
    remove?: ()=> void,
  }

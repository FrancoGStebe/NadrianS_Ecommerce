import { IProducts } from "@/interface/interfaces";


export async function fetchProduct(): Promise<IProducts[]> {
    const response = await fetch("http://localhost:5000/products");
    const products = await response.json();
    return products;
}

export async function fetchProductById(id: string): Promise<IProducts> {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    const product = await response.json();
    return product;
}
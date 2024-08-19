import ProductList from "@/components/ProductList";
import { IProducts } from "@/interface/interfaces";


async function fetchProduct(): Promise<IProducts[]> {
    const response = await fetch("http://localhost:5000/products");
    const products = await response.json();
    return products;
}

async function Products(){
const products = await fetchProduct();
    return(
        <div className="container mx-auto py-4 w-11/12 mt-20">
            <div className="bg-white rounded-lg shadow-lg p-4 mx-auto flex flex-row flex-wrap">
            <div>
            <ProductList products={products} />
            </div>
            </div>
        </div>
    )
}
export default Products;
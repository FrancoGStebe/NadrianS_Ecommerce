import { IProducts, IproductsProps } from "@/interface/interfaces";
import ProductCard from "../ProductCard";

function ProductList({ products }: IproductsProps) {
    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mx-auto">
            {products.map((product: IProducts) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
}

export default ProductList;


import Image from "next/image";
import { fetchProductById } from "@/lib/server/fetchProducts";
import AddToCart from "@/components/addToCart/AddToCart";


async function ProductId({ params }: { params: { id: string } }) {
    const product = await fetchProductById(params.id);

    return (
        <div className="container mx-auto py-8 w-11/12 mt-20">
            <div className="bg-white rounded-lg shadow-lg p-6 mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 relative h-96 w-full">
                    <Image
                        src={product?.image}
                        alt={product?.name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
                    <p className="text-xl text-gray-700 mb-4">${product?.price}</p>
                    <p className="text-gray-600 mb-4">{product?.description}</p>
                    <div className="px-4 py-2">
                        <AddToCart id={product?.id}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductId;

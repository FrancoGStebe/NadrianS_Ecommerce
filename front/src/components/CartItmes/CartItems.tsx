import { IProductsCartProps } from "@/interface/interfaces";

function CartItem({ products, quantity, remove }: IProductsCartProps & { quantity: number }) {
    return (
        <div className="flex items-center justify-between border border-gray-200 p-4 mb-4 rounded-lg">
            <div className="flex items-center space-x-4 w-full">
                <img src={products.image} alt={products.name} className="w-24 h-24 object-cover rounded-md" />
                <div className="flex flex-col flex-grow">
                    <span className="text-lg font-semibold">{products.name}</span>
                    <span className="text-gray-600">${products.price}</span>
                    {quantity > 1 && (
                        <span className="text-gray-500 text-sm">Cantidad: {quantity}</span>
                    )}
                </div>
                <div className="ml-auto mr-4">
                    <button
                        onClick={remove}
                        className="text-red-500 hover:text-red-700 transition-colors duration-300 flex-shrink-0"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

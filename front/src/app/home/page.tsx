
import InfoCards from "@/components/infoCard";
import Image from "next/image";
import { fetchProduct } from "@/lib/server/fetchProducts";
import ComponentProducts from "@/components/ComponentProducts/componentProducts";


async function Home() {
    const products = await fetchProduct();
    return (
        <div className="container mx-auto py-4 w-11/12 mt-20">
            <div className="bg-white rounded-lg shadow-lg p-4 mx-auto flex flex-row flex-wrap">
                <div className="w-full mb-4">
                    <h1 className="text-4xl font-bold text-center mb-2">Ofrecemos la mejor calidad</h1>
                    <p className="text-lg text-center text-gray-700">
                        Descubre nuestra selección de productos exclusivos, diseñados para brindarte la mejor experiencia y satisfacción. ¡Compra con confianza y encuentra lo que necesitas hoy!
                    </p>
                </div>
                <div className="w-1/2 px-1 mb-4">
                    <div className="relative h-0" style={{ paddingBottom: "50%" }}>
                        <Image
                            src="/imagenes/homeCard.jpg"
                            alt="Descripción de la primera imagen"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <div className="w-1/2 px-1 mb-4">
                    <div className="relative h-0" style={{ paddingBottom: "50%" }}>
                        <Image
                            src="/imagenes/homeCard2.jpg"
                            alt="Descripción de la segunda imagen"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <hr className="custom-hr w-full" style={{ marginTop: "20px", marginBottom: "20px" }} />
                <div className="w-full mb-4">
                    <InfoCards />
                </div>
                <hr className="custom-hr w-full" style={{ marginTop: "20px", marginBottom: "20px" }} />
                <div className="container mx-auto flex flex-wrap justify-center gap-4">
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow" style={{ backgroundColor: '#dff9e2' }}>
                        <a href="/products">
                            <img className="rounded-t-lg" src="/imagenes/celular.jpeg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="/products">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Celulares de última generación</h5>
                            </a>
                            <a href="/products" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
                                Conoce más
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow" style={{ backgroundColor: '#dff9e2' }}>
                        <a href="/products">
                            <img className="rounded-t-lg" src="/imagenes/reloj.jpeg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="/products">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Relojes para no perder el tiempo</h5>
                            </a>
                            <a href="/products" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
                                Conoce más
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow" style={{ backgroundColor: '#dff9e2' }}>
                        <a href="/products">
                            <img className="rounded-t-lg" src="/imagenes/tablet.jpeg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="/products">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Tablets para mejor experiencia</h5>
                            </a>
                            <a href="/products" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
                                Conoce más
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <hr className="custom-hr w-full" style={{ marginTop: "20px", marginBottom: "20px" }} />
                </div>
                <div className="flex flex-wrap w-full">
                    <ComponentProducts/>
                </div>
                <div className="flex justify-center items-center">
  <a href="/products" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
    🔥 Conoce más 🔥
  </a>
</div>

              
            </div>
        </div>
    );
}

export default Home;

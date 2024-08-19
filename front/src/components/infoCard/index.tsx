import Image from "next/image";

const infoCards = [
    {
        src: "/imagenes/tienda.png", // 
        alt: "Encuentra tu tienda",
        title: "Encontrá tu tienda",
        description: "más cercana.",
    },
    {
        src: "/imagenes/enviado.png", // Reemplaza con la ruta correcta de la imagen
        alt: "Sigue el estado",
        title: "Seguí el estado",
        description: "de tu envío.",
    },
    {
        src: "/imagenes/sensible.png", // Reemplaza con la ruta correcta de la imagen
        alt: "Corporativos",
        title: "Corporativos",
        description: "La solución que necesitas.",
    },
    {
        src: "/imagenes/aire-acondicionado.png", // Reemplaza con la ruta correcta de la imagen
        alt: "Servicio Técnico Oficial",
        title: "Servicio Técnico Oficial",
        description: "Más Información.",
    },
];

function InfoCards() {
    return (
        <div className="flex justify-around py-4">
            {infoCards.map((card, index) => (
                <div key={index} className="text-center bg-white shadow rounded-lg p-4 mx-2 flex-1">
                    <Image src={card.src} alt={card.alt} width={50} height={50} />
                    <h3 className="text-xl font-semibold mt-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                </div>
            ))}
        </div>
    );
}

export default InfoCards;

import Image from 'next/image';

function ComponentProducts() {
    return (
        <div className="container mx-auto p-4">
            {/* Primer producto */}
            <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="w-full md:w-1/2 p-4">
                    <Image 
                        src="/imagenes/carComponent2.jpeg" 
                        alt="Producto 1" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <p className="text-center">
                        ¿Sabías que los AirPods Max de Apple tienen un diseño acústico exclusivo que incorpora una malla transpirable en la corona, diseñada para distribuir el peso y reducir la presión sobre la cabeza? Esta innovadora característica asegura que puedas disfrutar de tus canciones favoritas, podcasts y llamadas con una comodidad superior durante horas sin sentirte incómodo.

                        Además, los AirPods Max están equipados con un sistema de cancelación activa de ruido de última generación. Utilizan seis micrófonos orientados hacia el exterior y dos hacia el interior para detectar y bloquear el ruido ambiental, proporcionando una experiencia de audio inmersiva y sin interrupciones.

                        ¡Descubre la combinación perfecta de diseño y tecnología con los AirPods Max y lleva tu experiencia auditiva al siguiente nivel!
                    </p>
                </div>
            </div>
            <hr className="custom-hr w-full my-8" />
            {/* Segundo producto */}
            <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
                    <p className="text-center md:text-left">
                        La iMac de Apple ha sido un símbolo de innovación desde su debut en 1998. Con un diseño revolucionario que integró por primera vez la pantalla y la CPU en una carcasa única y colorida, marcó un hito en la historia de las computadoras personales. Desde entonces, ha evolucionado continuamente, adoptando tecnologías avanzadas como la impresionante pantalla Retina 5K, que ofrece una resolución de 5120 x 2880 píxeles en su modelo de 27 pulgadas, ideal para diseñadores y creativos que valoran la calidad visual.

                        Equipada con potentes procesadores Intel Core y gráficos de alto rendimiento, la iMac no solo destaca por su elegante diseño, sino también por su capacidad para manejar tareas exigentes como la edición de video y el diseño 3D con fluidez y eficiencia. Además, Apple se compromete con la sostenibilidad, utilizando materiales reciclados en la fabricación de la iMac y diseñándola para ser altamente eficiente energéticamente.

                        Con características como Wi-Fi 6 y Bluetooth 5.0, la iMac ofrece conectividad rápida y sin complicaciones para periféricos y redes inalámbricas. Es una herramienta esencial para aquellos que buscan una combinación perfecta de estilo, rendimiento y compromiso ambiental en su estación de trabajo.

                        Descubre la fusión perfecta de diseño estético y funcionalidad potente con la iMac de Apple, una opción ideal para creativos y profesionales que buscan un rendimiento excepcional en un entorno elegante y eficiente.
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
                    <Image 
                        src="/imagenes/carComponent1.jpeg" 
                        alt="Producto 2" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default ComponentProducts;

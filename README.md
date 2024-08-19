# NadrianS_Ecommerce 🛒

## Descripción

Este proyecto es un prototipo de una tienda en línea que permite a los usuarios explorar y adquirir productos. Emplea tecnologías avanzadas para ofrecer una experiencia de usuario ágil y eficiente.

## Tecnologías Utilizadas

### Frontend

- Next.js con TypeScript
- Tailwind CSS para los estilos

### Backend

- Conexión a un backend preexistente mediante `fetch`

## Características

- **Secciones**
  - **Inicio:** Página principal donde se pueden ver los productos y las categorías.
  - **Productos:** Lista de artículos disponibles para la compra.
  - **Categorías:** Navegación por diferentes categorías de productos.

- **Registro e Inicio de Sesión**
  - **Registro:** Permite a los nuevos usuarios crear una cuenta.
  - **Inicio de Sesión:** Permite a los usuarios existentes iniciar sesión.
  - **Token JWT:** Después de iniciar sesión, se genera un token JWT que se almacena en `localStorage`.

- **Carrito de Compras**
  - **Añadir al Carrito:** Los usuarios registrados pueden agregar productos a su carrito.
  - **Realizar Compras:** Los usuarios registrados pueden proceder con la compra de los productos seleccionados.
  - **Ver Compras:** Los usuarios pueden consultar un historial de sus compras.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/TuUsuario/NadrianS_Ecommerce.git
    ```

2. **Navegar al directorio del proyecto:**

    ```bash
    cd NadrianS_Ecommerce
    ```

### Frontend

3. **Instalar las dependencias:**

    ```bash
    npm install
    ```

4. **Iniciar la aplicación Next.js:**

    ```bash
    npm run dev
    ```

5. **Abrir el proyecto en tu navegador:**
   - Visita `http://localhost:3000` para ver la aplicación en funcionamiento.

### Backend

6. **Configuración del Backend:**
   - El backend ya está integrado en el proyecto. Asegúrate de que el backend esté funcionando y configurado para aceptar conexiones desde el frontend.

## Uso

- **Registro e Inicio de Sesión**
  - **Registro:** Accede a la página de registro y completa el formulario para crear una nueva cuenta.
  - **Inicio de Sesión:** Después de registrarte, ve a la página de inicio de sesión e ingresa tus credenciales. El token JWT se generará automáticamente y se almacenará en `localStorage`.

- **Compras**
  - **Añadir al Carrito:** Selecciona productos y agrégales al carrito (esto requiere que el usuario haya iniciado sesión).
  - **Realizar Compras:** Procede a la compra de los productos en tu carrito. Después de completar la compra, podrás ver los detalles en la sección correspondiente.
 
- ## Autor

Este proyecto fue desarrollado por Franco Gabriel Stebe. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto conmigo.


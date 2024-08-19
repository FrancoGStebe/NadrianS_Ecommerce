

function NotFound() {
    return (
        <div className="container mx-auto py-4 w-11/12 mt-20">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h1 className="text-4xl font-bold mb-8">Page Not Found - Error 404</h1>
                <p className="text-lg mb-4" >Esta pagina no existe, por favor vuele al principio!</p>
                <a href="/home" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
          volver
        </a>
            </div>
        </div>
    );
}

export default NotFound;

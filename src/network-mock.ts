import fetchMock from "fetch-mock";

// Creamos un "sandbox", un entorno seguro para el mock
const fetchApi = fetchMock.sandbox();

// Configurar para que si no encuentra una ruta mockeada, siga la red normal
fetchApi.config.fallbackToNetwork = true;

// Simulamos una respuesta de la API cuando hacemos un GET a '/funcions'
fetchApi.mock(
    "/functions",
    {
        status: 200,
        body: [
            { id: "1", name: "Leer datos", permission: ["READ"] },
            { id: "2", name: "Escribir datos", permission: ["WRITE"] },
            { id: "3", name: "Eliminar datos", permission: ["DELETE"] },
        ],
    },
    { delay: 500 } // Simulamos retraso de 500ms
);

// Exportamos el mock para usarlo en el proyecto
export {fetchApi};
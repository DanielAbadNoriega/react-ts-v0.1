import { useFunctionContext } from "../context/FunctionContext";

const Home = () => {
  const { functions, dispatch } = useFunctionContext();

  return (
    <div>
      <h1>Funciones</h1>
      <button onClick={() =>
        dispatch({
          type: "ADD",
          payload: { id: new Date().toISOString(), name: "Leer datos", permission: ["READ"] },
        })
      }>
        Agregar Función
      </button>
      <ul>
        {functions.map((func) => (
          <li key={func.id}>
            {func.name}{" "}
            <button onClick={() =>
              dispatch({
                type: "DELETE",
                payload: func.id
              })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

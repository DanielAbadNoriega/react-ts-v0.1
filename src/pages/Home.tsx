import { useFunctionContext } from "../context/FunctionContext";

const Home = () => {
  const { functions, addFunction } = useFunctionContext();

  return (
    <div>
      <h1>Funciones</h1>
      <button onClick={() => addFunction({ id: "1", name: "Leer datos", permission: ["READ"] })}>
        Agregar Función
      </button>
      <ul>
        {functions.map((func) => (
          <li key={func.id}>{func.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

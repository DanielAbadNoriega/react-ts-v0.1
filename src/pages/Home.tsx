import { useFunctionContext } from "../context/FunctionContext";

const Home = () => {
  const { functions, dispatch } = useFunctionContext();

  function updateName(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    dispatch({
      type: "UPDATE",
      payload: {
        id: id,
        name: e.target.value
      }
    })
  }

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
            <p>{func.name}</p><br />

            <input
              type="text"
              value={func.name}
              onChange={(e) => updateName(e, func.id)} />


            <br></br>

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

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from "react";

type FunctionType = {
  id: string;
  name: string;
  permission: string[];
};

// Definir las acciones posibles
type FunctionAction =
  | { type: "ADD"; payload: FunctionType }
  | { type: "DELETE"; payload: string }
  | {
    type: "UPDATE"; payload: {
      id: string;
      name: string;
    }
  }
  | { type: "LOAD"; payload: FunctionType[] }

type FunctionContextType = {
  functions: FunctionType[];
  dispatch: React.Dispatch<FunctionAction>;
};

const functionReducer = (state: FunctionType[], action: FunctionAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]; // Agregamos nueva función
    case "DELETE":
      return state.filter((func) => func.id !== action.payload); // Filtramos y eliminamos la función
    case "UPDATE":
      const { id, name } = action.payload;
      return state.map((func) => func.id === id ? { ...func, name: name } : func);
    case "LOAD":
      return action.payload;
    default:
      return state;
  }
}

export const FunctionContext = createContext<FunctionContextType | undefined>(undefined);

export const FunctionProvider = ({ children }: { children: ReactNode }) => {

  const [functions, dispatch] = useReducer(functionReducer, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Simulamos que los usuarios son funciones
      .then((response) => response.json())
      .then((data) => dispatch({
        type: "LOAD",
        payload: data.map((user: any) => ({
          id: user.id.toString(),
            name: user.name,
              permission: ["READ"],
        }))
      }));
  }, []);

  return (
    <FunctionContext.Provider value={{ functions, dispatch }}>
      {children}
    </FunctionContext.Provider>
  );
};

export const useFunctionContext = () => {
  const context = useContext(FunctionContext);
  if (!context) throw new Error("useFunctionContext must be used within FunctionProvider");
  return context;
};

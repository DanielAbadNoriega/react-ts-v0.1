import React, { createContext, useContext, useReducer, useState, ReactNode } from "react";

type FunctionType = {
  id: string;
  name: string;
  permission: string[];
};

// Definir las acciones posibles
type FunctionAction =
  | { type: "ADD"; payload: FunctionType }
  | { type: "DELETE"; payload: string };

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
    default:
      return state;
  }
}

export const FunctionContext = createContext<FunctionContextType | undefined>(undefined);

export const FunctionProvider = ({ children }: { children: ReactNode }) => {

  const [functions, dispatch] = useReducer(functionReducer, []); // sustituimos useState por useReducer

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

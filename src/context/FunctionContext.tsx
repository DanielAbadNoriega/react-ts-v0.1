import { createContext, useContext, useState, ReactNode } from "react";

type FunctionType = {
  id: string;
  name: string;
  permission: string[];
};

type FunctionContextType = {
  functions: FunctionType[];
  addFunction: (newFunc: FunctionType) => void;
};

const FunctionContext = createContext<FunctionContextType | undefined>(undefined);

export const FunctionProvider = ({ children }: { children: ReactNode }) => {
  const [functions, setFunctions] = useState<FunctionType[]>([]);

  const addFunction = (newFunc: FunctionType) => {
    setFunctions((prev) => [...prev, newFunc]);
  };

  return (
    <FunctionContext.Provider value={{ functions, addFunction }}>
      {children}
    </FunctionContext.Provider>
  );
};

export const useFunctionContext = () => {
  const context = useContext(FunctionContext);
  if (!context) throw new Error("useFunctionContext must be used within FunctionProvider");
  return context;
};

import AppRouter from "./routes/AppRouter";
import { FunctionProvider } from "./context/FunctionContext";

function App() {
  return (
    <FunctionProvider>
      <AppRouter />
    </FunctionProvider>
  );
}

export default App;

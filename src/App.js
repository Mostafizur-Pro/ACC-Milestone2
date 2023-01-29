import { createContext, useState } from "react";
import "./App.css";
import Parents from "./Pages/Parents";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        <Parents />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;

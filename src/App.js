import { createContext, useState } from "react";
import "./App.css";
import Counter from "./Pages/Counter";
import LongForm from "./Pages/LongForm";
import Parents from "./Pages/Parents";
import ShortForm from "./Pages/ShortForm";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        {/* <Parents /> */}
        {/* <ShortForm /> */}
        {/* <Counter /> */}
        <LongForm />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;

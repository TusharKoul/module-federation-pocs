import { useState } from "react";
import "./App.css";

import Button from "./Button";
// import useCount from "./store";

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setState((s) => s + 1)}>
          count is {state}
        </button>
      </div>
    </div>
  );
}

export default App;

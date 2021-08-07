import { useState } from "react";
import "./App.css";
import Circle from "./Circle.js";

export default function App() {
  let [count, setCount] = useState([
    {
      id: "red",
      count: 0
    },
    {
      id: "blue",
      count: 0
    },
    {
      id: "green",
      count: 0
    }
  ]);

  let increment = id => {
    let countIndex = count.findIndex(obj => obj.id === id);
    count[countIndex].count++;
    setCount([...count]);
  };
  let reset = () => {
    count.map(obj => (obj.count = 0));
    setCount([...count]);
  };

  return (
    <div>
      <div className="App1">
        <button onClick={reset} className="btn1">
          Reset
        </button>
      </div>
      <div className="App">
        {count.map(obj => {
          return <Circle data={obj} handleCount={increment} className="App" />;
        })}
      </div>
    </div>
  );
}

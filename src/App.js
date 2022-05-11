import "./styles.css";
import { useState } from "react";
export default function App() {
  const [input, setInput] = useState("");
  let a = input
    .split("")
    .reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  console.log(a);

  return (
    <div className="App">
      <input onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

import {useState} from "react";
import './App.css';
import ShapeSelector from "./ShapeSelector";
import DimensionSelector from "./DimensionSelector";

function App() {
  const [shape,selectShape] = useState("");
  return (
    <div className="App">
      <h1 id="main__title">LIVE SHAPES</h1>
      {shape === ""? <ShapeSelector selectShape={selectShape} /> : <DimensionSelector shape={shape} /> }      
      
    </div>
  );
}

export default App;

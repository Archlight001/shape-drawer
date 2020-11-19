import { useState } from "react";
import "./App.css";
import ShapeSelector from "./ShapeSelector";
import DimensionSelector from "./DimensionSelector";
import ShapeCanvas from "./ShapeCanvas";

function App() {
  const [shape, selectShape] = useState("");
  const backHome = () => selectShape("");
  const [shape__dimensions, drawShape] = useState({});
  return (
    <div className="App">
      <h1 id="main__title">LIVE SHAPES</h1>
      {shape === "" || undefined ? (
        <ShapeSelector selectShape={selectShape} />
      ) : Object.keys(shape__dimensions).length === 0 ? (
        <DimensionSelector shape={shape} backHome={backHome} drawShape = {drawShape} />
      ) : (
        <ShapeCanvas shape__dimensions={shape__dimensions} />
      )}
    </div>
  );
}

export default App;

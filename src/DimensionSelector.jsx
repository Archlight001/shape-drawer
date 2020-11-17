import { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function DimensionSelector({ shape, backHome }) {
  const [dimension, setDimension] = useState({});
  return (
    <div className="main__selector__container">
      <div className="dimension__container__heading">
        <ArrowBackIcon className="back__arrow" onClick={backHome} />
        <h3>Enter Dimensions for {shape.toUpperCase()}</h3>
      </div>
      <div className="dimension__input__container">
        <input
          type="text"
          placeholder="Enter Width"
          className="dimension__input"
        />
        <input
          type="text"
          placeholder="Enter Height"
          className="dimension__input"
        />
      </div>

      <div className="draw__button__container">
        <button className="draw__button">Draw</button>
      </div>
    </div>
  );
}

export default DimensionSelector;

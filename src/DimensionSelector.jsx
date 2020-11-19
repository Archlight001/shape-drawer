import { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function DimensionSelector({ shape, backHome }) {
  const [dimension, setDimension] = useState({});
  const [inputs, setInputs] = useState([]);

  useEffect(() => {

    if (Object.keys(dimension).length === 0) {
      switch (shape) {
        case "rectangle":
          setDimension({ Width: "", Height: "" });
          break;

        case "square":
          setDimension({ Length: "" });
          break;

        default:
          break;
      }
    }

    setInputs(makeInput(selectedShape));


  }, [shape, dimension]);

  const rectangle = ["Width", "Height"];
  const square = ["Length"];

  var selectedShape = [];

  switch (shape) {
    case "rectangle":
      selectedShape = [...rectangle];
      break;

    case "square":
      selectedShape = [...square];
      break;

    default:
      break;
  }

  function makeInput(dimensions) {
    console.log("Input dimension side ", dimension);
    var input__dimensions = dimensions.map((value, index) => {
      return (
        <input
          key={index}
          type="text"
          name={value}
          placeholder={`Enter ${value}`}
          className="dimension__input"
          value={dimension[value]}
          onChange={setInputValue}
        />
      );
    });
    return input__dimensions;
  }

  function setInputValue(e) {
    setDimension({ ...dimension, [e.target.name]: e.target.value });
  }

  console.log(dimension);
  return (
    <div className="main__selector__container">
      <div className="dimension__container__heading">
        <ArrowBackIcon className="back__arrow" onClick={backHome} />
        <h3>Enter Dimensions for {shape.toUpperCase()}</h3>
      </div>
      <div className="dimension__input__container">{inputs}</div>

      <div className="draw__button__container">
        <button className="draw__button">Draw</button>
      </div>
    </div>
  );
}

export default DimensionSelector;

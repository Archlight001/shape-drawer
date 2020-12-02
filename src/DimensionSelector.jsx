import { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PolygonSelector from "./PolygonSelector";

function DimensionSelector({ shape, backHome, drawShape }) {
  const [dimension, setDimension] = useState({});
  const [polygonDimensions, setPolygonDimensions] = useState([]);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    if (shape !== "polygon") {
      const rectangle = ["Width", "Height"];
      const square = ["Length"];
      const triangle = ["Sides length"];

      var selectedShape = [];

      switch (shape) {
        case "rectangle":
          selectedShape = [...rectangle];
          break;

        case "square":
          selectedShape = [...square];
          break;

        case "triangle":
          selectedShape = [...triangle];
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
        setDimension({ ...dimension, [e.target.name]: e.target.value.trim() });
      }

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
    }
  }, [shape, dimension]);

  //Draw function to pass values to ShapeCanvas Component
  function draw() {
    if (polygonDimensions.length === 0) {
      //Check values for anomalies before submission
      var foundAnomaly = false;
      Object.values(dimension).every((value) => {
        var charArray = Array.from(value);

        //Check if any field is empty
        if (charArray.length === 0) {
          foundAnomaly = true;
          alert("Non Empty fields are not allowed");
          return false;
        }

        //Check if there any non numerical values
        charArray.every((char) => {
          if (
            !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char)
          ) {
            foundAnomaly = true;
            alert("Numerical Values only");
            return false;
          }
          return true;
        });

        if (foundAnomaly === true) {
          return false;
        }

        return true;
      });
      //Pass Values to ShapeCanvas Component if no anomaly is found
      if (foundAnomaly === false) {
        drawShape({ Name: shape, ...dimension });
      }
    } else {
      let foundAnomaly = false;
      polygonDimensions.every((values) => {
        for (var i = 0; i < values.length; i++) {
          if (Array.from(values[i]).length === 0) {
            foundAnomaly = true;
            break;
          }
        }
        if(foundAnomaly){
          return false;
        }
        return true;
      });
      if (!foundAnomaly) {
        drawShape({ Name: shape, Dimension: [...polygonDimensions] });
      } else {
        alert("Empty Input found");
      }
    }
  }

  return (
    <div className="main__selector__container">
      <div className="dimension__container__heading">
        <ArrowBackIcon className="back__arrow" onClick={backHome} />
        <h3>Enter Dimensions for {shape.toUpperCase()}</h3>
      </div>
      <div className="dimension__input__container">
        {shape !== "polygon" ? (
          inputs
        ) : (
          <PolygonSelector
            polygonDimensions={polygonDimensions}
            setPolygonDimensions={setPolygonDimensions}
          />
        )}
      </div>

      <div className="draw__button__container">
        <button className="draw__button" onClick={draw}>
          Draw
        </button>
      </div>
    </div>
  );
}

export default DimensionSelector;

import { useState, useEffect } from "react";

function PolygonSelector() {
  const [numberOfSides, setSideNumber] = useState(0);
  const [selectors, setSelectors] = useState([]);
  const [polygonDimensions, setPolygonDimensions] = useState([]);

  useEffect(() => {
    if (numberOfSides !== 0) {
      let inputArray = [];
      let inputDimensions = [];

      if (polygonDimensions.length === 0) {
        for (let i = 0; i < numberOfSides; i++) {
          inputDimensions.push(["0", "0"]);
        }
        setPolygonDimensions([...inputDimensions]);
      }

      if (polygonDimensions.length !== 0) {
        for (let i = 0; i < numberOfSides; i++) {
          inputArray.push(
            <div key={i + 1}>
              <input
                className="dimension__input"
                name={`x${i}`}
                type="text"
                onChange={changeDimension}
                value={polygonDimensions[i][0]}
                placeholder={`x${i + 1}`}
              />
              <input
                className="dimension__input"
                name={`y${i}`}
                type="text"
                onChange={changeDimension}
                value={polygonDimensions[i][1]}
                placeholder={`y${i + 1}`}
              />
            </div>
          );
        }
        setSelectors([...inputArray]);
      }
    }

    function changeDimension(e) {
      let name = Array.from(e.target.name);
      let value = e.target.value;
      let pDimensions = [...polygonDimensions];

      if (name[0] === "x") {
        pDimensions[parseInt(name[1])][0] = value.trim();
      } else if (name[0] === "y") {
        pDimensions[parseInt(name[1])][1] = value.trim();
      }

      setPolygonDimensions([...pDimensions]);
    }

    console.log(polygonDimensions);
  }, [numberOfSides, polygonDimensions]);

  const setSides = (e) => {
    if (e.target.value !== "ES") {
      setSideNumber(e.target.value);
      setPolygonDimensions([]);
    } else {
      setSideNumber(0);
      setPolygonDimensions([]);
    }
  };

  function setDefaultValues(e) {
    const defaultParallelogram = [
      ["25", "0"],
      ["100", "0"],
      ["75", "100"],
      ["0", "100"],
    ];
    const defaultPentagon = [
      ["50", "0"],
      ["100", "38"],
      ["82", "100"],
      ["", "100"],
      ["0", "38"],
    ];
    const defaultHexagon = [
      ["25", "0"],
      ["75", "0"],
      ["100", "50"],
      ["75", "100"],
      ["25", "100"],
      ["0", "50"],
    ];
    if (e.target.checked) {
      if (polygonDimensions.length === 4) {
        setPolygonDimensions([...defaultParallelogram]);
      }else if(polygonDimensions.length === 5){
          setPolygonDimensions([...defaultPentagon])
      }else if(polygonDimensions.length === 6){
        setPolygonDimensions([...defaultHexagon])
    }
    } else {
      setPolygonDimensions([]);
    }
  }

  //console.log(polygonDimensions);
  return (
    <div>
      <select className="dimension__select" name="sides" onChange={setSides}>
        <option value="ES">Select Polygon</option>
        <option value="4">Parallelogram</option>
        <option value="5">Pentagon</option>
        <option value="6">Hexagon</option>
      </select>

      {numberOfSides !== 0 && (
        <div>
          <div className="check__box">
            <input type="checkbox" name="" id="" onChange={setDefaultValues} />
            <label htmlFor="">Use Default values</label>
          </div>
          {selectors}
        </div>
      )}
    </div>
  );
}

export default PolygonSelector;

import Triangle from "./shapes/triangle.png";
import Rectangle from "./shapes/rectangle.png";
import Square from "./shapes/square.png";
import Pentagon from "./shapes/pentagon.png";

function ShapeSelector({ selectShape }) {
  return (
    <div className="main__selector__container">
      <h3>Select a Shape </h3>

      <div className="shape__list">
        <div
          className="shape__selector"
          onClick={selectShape.bind(this, "triangle")}
        >
          <img
            src={Triangle}
            id="triangle"
            width="20"
            height="20"
            alt="triangle"
          />
          <p>Triangle</p>
        </div>

        <div
          className="shape__selector"
          onClick={selectShape.bind(this, "rectangle")}
        >
          <img src={Rectangle} width="40" alt="rectangle" />
          <p>Rectangle</p>
        </div>

        <div
          className="shape__selector"
          onClick={selectShape.bind(this, "square")}
        >
          <img src={Square} width="40" id="square" height="20" alt="square" />
          <p id="square__p">Square</p>
        </div>

        <div
          className="shape__selector"
          onClick={selectShape.bind(this, "polygon")}
        >
          <img
            src={Pentagon}
            id="polygon"
            width="40"
            height="35"
            alt="polygon"
          />
          <p>Polygon</p>
        </div>
      </div>
    </div>
  );
}

export default ShapeSelector;

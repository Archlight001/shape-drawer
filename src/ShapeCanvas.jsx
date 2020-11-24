import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Path from "react-svg-path-shapes";

function ShapeCanvas({ shape__dimensions, drawShape }) {
  console.log(shape__dimensions);
  const width = 800;
  const height = 800;

  var shapeName = shape__dimensions.Name;
  if (shapeName === "rectangle") {
    shapeName = "rect";
  }else if(shapeName === "pentagon"){
    shapeName = "polygon";
  }

  var path = <path />;

  switch (shapeName) {
    case "rect":
      path = (
        <path
          d={new Path()
            [shapeName](
              shape__dimensions.Width,
              shape__dimensions.Height,
              200,
              250
            )
            .toString()}
        />
      );
      break;

    case "square":
      path = (
        <path
          d={new Path()
            [shapeName](shape__dimensions.Length, 200, 250)
            .toString()}
        />
      );
      break;

    case "triangle":
      path = (
        <path
          d={new Path()
            [shapeName](shape__dimensions["Sides length"], 200, 250)
            .toString()}
        />
      );
      break;

      case "polygon":
        path = (
          <path
            d={new Path()
              ["polygon"]([[350,0],[300,538],[532,500],[418,400],[420,38]])
              .toString()}
          />
        );
        break;

    default:
      break;
  }

  return (
    <div className="shape__canvas__container">
      <div>
        <ArrowBackIcon
          className="back__arrow"
          onClick={drawShape.bind(this, {})}
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        {path}
      </svg>
    </div>
  );
}

export default ShapeCanvas;

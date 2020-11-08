// import logo from "./logo.svg";
import "./App.css";
import man from "./mans.png";
import upperback1 from "./scapular-wall-slide.jpg";
import upperback2 from "./upperRope.png";
import lowerback1 from "./back-stretches1.jpeg";
import lowerback2 from "./back-stretches2.jpeg";
import neck from "./neck-stretches.jpg";
import ReactTooltip from "react-tooltip";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";

function App() {
  let picturesOpen = " ";
  function setToOpen(string) {
    if (picturesOpen != " ") {
      document.getElementById(picturesOpen).style.opacity = 0;
    }
    picturesOpen = string;
    document.getElementById(string).style.opacity = 1;
  }

  return (
    <div>
      <div className="banner">
        <a className="home" href="/">
          Ponere
        </a>
      </div>
      <div className="bannerFiller"></div>
      <h1 style={{ textAlign: "center", fontSize: "20px" }}>
        Select which area you'd like to stretch:
      </h1>

      <div className="imageHolder">
        <img
          className="neck fade images"
          id="neck"
          width="30%"
          height="auto"
          src={neck}
          alt="neck"
        />
        <div className="upper fade" id="upper">
          <img
            className="upper1 images"
            width="30%"
            height="auto"
            src={upperback1}
            alt="back"
          />
          <img
            className="upper2 images"
            width="30%"
            height="auto"
            src={upperback2}
            alt="back"
          />
        </div>
        <div className="lower fade" id="lower">
          <img
            className="lower1 images"
            width="30%"
            height="auto"
            src={lowerback1}
            alt="lowerback1"
          />
          <img
            className="lower2 images"
            width="30%"
            height="auto"
            src={lowerback2}
            alt="lowerback2"
          />
        </div>

        <img className="photo" src={man} alt="body for selection" />
        <a data-tip="Neck" id="neckDiv" onClick={() => setToOpen("neck")}></a>
        <a
          data-tip="Upper Back & Shoulders"
          id="upperBackDiv"
          onClick={() => setToOpen("upper")}
        ></a>
        <a
          data-tip="Lower Back & Hip Flexors"
          id="lowerBackDiv"
          onClick={() => setToOpen("lower")}
        ></a>
        <ReactTooltip />
      </div>
    </div>
  );
}

export default App;

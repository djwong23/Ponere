// import logo from "./logo.svg";
import "./App.css";
import man from "./mans.png";
import ReactTooltip from 'react-tooltip';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
function App() {
  return (
    <div>
      <div className="banner">
        <a className="home" href="/">
          Ponere
        </a>
      </div>
      <div className="bannerFiller"></div>
      <h1 style={{ textAlign: "center", fontSize: "20px" }}>
              Select which area you'd like to correct:
      </h1>
      <div className="imageHolder">
          <img className="photo" src={man} alt = "body for selection"/>
            <a data-tip = "Neck" id="neckDiv"></a>
            <a data-tip = "Upper Back & Shoulders" id="upperBackDiv"></a>
            <a data-tip = "Lower Back & Hip Flexors" id="lowerBackDiv"></a>
            <ReactTooltip/>
      </div>
          <UncontrolledPopover trigger="legacy" placement="left" target="neckDiv">
            <PopoverHeader>The Neck</PopoverHeader>
            <PopoverBody>Temporary</PopoverBody>
          </UncontrolledPopover>
          <UncontrolledPopover trigger="legacy" placement="right" target="upperBackDiv">
            <PopoverHeader>Upper Back</PopoverHeader>
            <PopoverBody>Temporary</PopoverBody>
          </UncontrolledPopover>
          <UncontrolledPopover trigger="legacy" placement="left" target="lowerBackDiv">
            <PopoverHeader>Lower Back</PopoverHeader>
            <PopoverBody>Temporary</PopoverBody>
          </UncontrolledPopover>
    </div>
  );
}

export default App;
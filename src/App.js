// import logo from "./logo.svg";
import "./App.css";
import man from "./mans.png";
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
            <a id="neckDiv" href="neck"></a>
            <a id="upperBackDiv" href="upperBack"></a>
            <a id="lowerBackDiv" href="lowerBack"></a>
          </div>
    </div>
  );
}

export default App;

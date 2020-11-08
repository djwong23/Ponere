// import logo from "./logo.svg";
import "./App.css";
import man from "./man.svg";
function App() {
  return (
    <div>
      <div className="banner">
        <a className="home" href="/">
          Ponere
        </a>
      </div>
      <div style={{ alignItems: "center" }}>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Select which area you'd like to correct:
        </p>
        <img className="photo" src={man} alt = "body for selection"/>
      </div>
    </div>
  );
}

export default App;

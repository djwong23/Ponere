import logo from "./logo.svg";
import "./App.css";
import man from "./man.svg";
function App() {
  return (
    <div>
      <div className="banner">
        <p style={{ textAlign: "center" }}>Ponere</p>
      </div>
      <div style={{ alignItems: "center" }}>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Select which area you'd like to correct:
        </p>
        <img className="photo" src={man} />
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import man from "./man.svg";
function App() {
  return (
    <div>
      <div className="banner">
        <a style={{ textAlign: "center", textDecoration: "none", color: '#535353', paddingLeft: '10%', position: 'absolute', top: '33%'}} href = "/">Ponere</a>
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

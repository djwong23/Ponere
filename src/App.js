import logo from './logo.svg';
import './App.css';
import man from './man.svg';
function App() {
  
  return (
    <div style={{alignItems: "center"}}>
      <p style={{textAlign: "center"}}>Select which area you'd like like to exercise:</p>
      <img className = "photo" src={man}/>
    </div>
  )
  
}

export default App;

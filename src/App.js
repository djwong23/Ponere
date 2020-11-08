import logo from "./logo.svg";
import "./App.css";
import man from "./man.svg";
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

function App() {
  const [popoverOpen, setPopover] = useState(0);

  const toggle = (id) => setPopover(id)
  return (
    <div>
      <div className="banner">
        <a style={{ textAlign: "center", textDecoration: "none", color: '#535353', paddingLeft: '10%', position: 'absolute', top: '33%'}} href = "/">Ponere</a>
      </div>
      <div style={{ alignItems: "center" }} >
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Select which area you'd like to correct:
        </p>
        <img className="photo" src={man} width="1000vw" height="500vh"/>
        <Button className="foot" id="Popover1" type="button" onClick={() => toggle(1)}>
        </Button>
        <Popover placement="bottom" isOpen={popoverOpen === 1} target="Popover1">
          <PopoverHeader>The Foot</PopoverHeader>
          <PopoverBody>Temporary</PopoverBody>
        </Popover>

        <Button className="hand" id="Popover2" type="button" onClick={() => toggle(2)}>
        </Button>
        <Popover placement="bottom" isOpen={popoverOpen === 2} target="Popover2">
          <PopoverHeader>The Hand</PopoverHeader>
          <PopoverBody>Temporary</PopoverBody>
        </Popover>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import man from './man.svg';
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';




function App() {
  const [popoverOpen, setPopover] = useState(0);

  const toggle = (id) => { console.log("hello\n"); setPopover(id);}
  return (
    <div style={{alignItems: "center"}}>
      <p style={{textAlign: "center"}}>Select which area you'd like like to exercise:</p>
      <img className = "photo" src={man} height="600vh" width="1000vw"/>

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
  );

}

export default App;

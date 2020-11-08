import logo from "./logo.svg";
import "./App.css";
import man from "./man.svg";
import React, { useState } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { render } from "@testing-library/react";

function App() {
    return (
      <div>
        <div className="banner">
          <a style={{ textAlign: "center", textDecoration: "none", color: '#535353', paddingLeft: '10%', position: 'absolute', top: '33%'}} href = "/">Ponere</a>
        </div>
        <div style={{ alignItems: "center" }} >
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Select which area you'd like to correct:
          </p>
          <img className="photo" src={man}/>
          <Button className="neck" id="Popover1" type="button">
          </Button>
          <UncontrolledPopover trigger="focus" placement="right" target="Popover1">
            <PopoverHeader>The Neck</PopoverHeader>
            <PopoverBody>Temporary</PopoverBody>
          </UncontrolledPopover>

          <Button className="upperback" id="Popover2" type="button">
          </Button>
          <UncontrolledPopover trigger="legacy" placement="right" target="Popover2">
            <PopoverHeader>Upper Back</PopoverHeader>
            <PopoverBody>Temporary</PopoverBody>
          </UncontrolledPopover>

          <Button className="lowerback" id="Popover3" type="button">
          </Button>
          <UncontrolledPopover trigger="legacy" placement="right" target="Popover3">
            <PopoverHeader>Lower Back</PopoverHeader>
            <PopoverBody>Temporary</PopoverBody>
          </UncontrolledPopover>
        </div>
      </div>
    );
}

export default App;

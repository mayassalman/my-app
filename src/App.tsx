import React from "react";
import "./App.css";
import { Hello } from "./component/Hello/Hello";
import { HelloNormal } from "./component/HelloNormal/HelloNormal";
import { World } from "./component/World/World";
import { WorldNormal } from "./component/WorldNormal/WorldNormal";

function App() {
  return (
    <div className="App">
      <Hello />
      <br />
      <World />
      <br />
      <br />
      <br />
      <br />
      <HelloNormal />
      <br />
      <br />
      <WorldNormal />
    </div>
  );
}

export default App;

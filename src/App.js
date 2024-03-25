import React from "react";
import "./App.css";
import "./index.css";
import Routerfile from "./components/routes/Routerfile";
function App() {
  return (
    <div className="App p-0">
      <div className="row m-0">
        <Routerfile />
        <div
          className="absoluer position-absolute"
          style={{ top: "3100px" }}
        ></div>
      </div>
    </div>
  );
}

export default App;

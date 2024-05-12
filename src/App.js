import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Routerfile from "./components/routes/Routerfile";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App p-0">
      {loading && (
        <div className="overlay-loader bg-main">
          <div className="banter-loader">
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
          </div>
        </div>
      )}
      <div className="row m-0">
        <Routerfile />
        <div
          className="absolute position-absolute"
          style={{ top: "710vh" }}
        ></div>
      </div>
    </div>
  );
}

export default App;

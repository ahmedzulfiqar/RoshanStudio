import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Routerfile from "./components/routes/Routerfile";
import { motion, useAnimation } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      controls.start({ opacity: 0 });
    }
  }, [controls, loading]);

  return (
    <div className="App p-0">
      {loading && (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="overlay-loader bg-main"
        >
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
        </motion.div>
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

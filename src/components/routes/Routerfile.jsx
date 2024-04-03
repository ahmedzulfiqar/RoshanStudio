import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../desgin-blocks/Header";
import Footer from "../desgin-blocks/Footer";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import About from "../pages/About";

function Routerfile() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="row m-0 p-0 ">
        <div className="col-12 p-0 m-0">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Routerfile;

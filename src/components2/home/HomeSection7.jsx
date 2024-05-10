import React, { useEffect, useRef, useState } from "react";
import portfoliodata from "../../components/data/portfoliodata";
import { motion } from "framer-motion";

const HomeSection7 = () => {
  const scrollerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [slectedcetagory, setslectedcetagory] = useState("Real Estate");
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scroller.offsetLeft);
      setScrollLeft(scroller.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scroller.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
      scroller.scrollLeft = scrollLeft - walk;
    };

    scroller.addEventListener("mousedown", handleMouseDown);
    scroller.addEventListener("mouseleave", handleMouseLeave);
    scroller.addEventListener("mouseup", handleMouseUp);
    scroller.addEventListener("mousemove", handleMouseMove);

    return () => {
      scroller.removeEventListener("mousedown", handleMouseDown);
      scroller.removeEventListener("mouseleave", handleMouseLeave);
      scroller.removeEventListener("mouseup", handleMouseUp);
      scroller.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <>
      <div
        className="bg-white  d-flex align-items-center position-relative overflow-hidden"
        style={{ minHeight: "75vh" }}
      >
        <div class="container px-0 ps-lg-0 my-md-5">
          <div className="row m-0 my-md-5 justify-content-center ">
            <div className="col-lg-11 col-12 text-center align-self-center mt-5 d-md-block d-none">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="display-3 Mazzard text-primarys text-uppercase pb-lg-3 pb-2">
                  <span className="text-main">Portfolio</span>
                </div>
                <p className="display-6 text-uppercase Mazzard fw-bolder text-primarys pb-2">
                  Seeing is Believing:
                  <br />
                  <span className="text-lessmain">
                    Dive into Our Editing Portfolio
                  </span>
                </p>
              </motion.div>
            </div>
            <div className="col-lg-11 col-12 text-center align-self-center mt-5 d-md-none d-block">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="display-2 Mazzard text-primarys text-uppercase pb-lg-3 pb-3">
                  <span className="text-main">Portfolio</span>
                </div>
                <p className="fs-3 text-uppercase Mazzard fw-bolder text-primarys pb-2">
                  Seeing is Believing:
                  <span className="text-lessmain">
                    Dive into Our Editing Portfolio
                  </span>
                </p>
              </motion.div>
            </div>
            <div
              ref={scrollerRef}
              className="col-12 barshop overflow-x-scroll  text-center justify-content-center d-md-flex d-none   pt-md-5 fw-bolder"
            >
              {portfoliodata.map((i) => {
                return (
                  <motion.div
                    key={i.name}
                    className={
                      slectedcetagory === i.name
                        ? " text-main px-lg-4 px-2 fs-4 pointer Mazzard-2"
                        : " text- px-lg-4 px-2 fs-4 pointer Mazzard-2"
                    }
                    style={{ whiteSpace: "nowrap", width: "max-content" }}
                    onClick={() => {
                      setslectedcetagory(i.name);
                    }}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0 }}
                    viewport={{ once: true }}
                  >
                    {i.name}
                    {slectedcetagory === i.name && (
                      <hr className="w-25 border-5 opacity-100 mt-2 m-0 rounded-5" />
                    )}
                  </motion.div>
                );
              })}
            </div>
            <div
              ref={scrollerRef}
              className="col-12 barshop overflow-x-scroll  text-center justify-content-center d-md-none d-flex   pt-md-5 fw-bolder"
            >
              {portfoliodata.map((i) => {
                return (
                  <motion.div
                    key={i.name}
                    className={
                      slectedcetagory === i.name
                        ? " text-main px-lg-4 px-1 fs-6 pointer  text-uppercase"
                        : " text- px-lg-4 px-1 fs-6 pointer  text-uppercase"
                    }
                    style={{ whiteSpace: "nowrap", width: "max-content" }}
                    onClick={() => {
                      setslectedcetagory(i.name);
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0 }}
                    viewport={{ once: true }}
                  >
                    {i.name}
                    {slectedcetagory === i.name && (
                      <hr className="w-25 border-5 opacity-100 mt-2 m-0 rounded-5" />
                    )}
                  </motion.div>
                );
              })}
            </div>
            <div className="col-12 mt-md-5 mb-md-0 mb-5">
              <div className="row m-0 mt-md-5 mt-4">
                {portfoliodata
                  .filter((data) => data.name === slectedcetagory)[0]
                  .videos.map((video, index) => {
                    // Render two videos per row
                    if (index % 2 === 0) {
                      return (
                        <div key={index} className="row m-0 mb-4">
                          <div className="col-md-6">
                            <iframe
                              width="100%"
                              height="450"
                              src={video.link}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="d-md-block"
                            ></iframe>
                          </div>
                          {/* Check if there is another video available */}
                          {index + 1 <
                            portfoliodata.filter(
                              (data) => data.name === slectedcetagory
                            )[0].videos.length && (
                            <div className="col-md-6">
                              <iframe
                                width="100%"
                                height="450"
                                src={
                                  portfoliodata.filter(
                                    (data) => data.name === slectedcetagory
                                  )[0].videos[index + 1].link
                                }
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="d-md-block"
                              ></iframe>
                            </div>
                          )}
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="behind position-absolute end-0 top-0 z-2 pointerer">
          <img
            src="https://marksoln.in/assets/img/images/h3_project_shape.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>{" "}
    </>
  );
};

export default HomeSection7;

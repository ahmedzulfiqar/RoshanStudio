import React, { useEffect, useRef, useState } from "react";
import portfoliodata from "../../components/data/portfoliodata";
import { useLocation } from "react-router-dom";
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
        className="bg-white border d-flex align-items-center position-relative overflow-hidden"
        style={{ minHeight: "75vh" }}
      >
        <div class="container px-0 ps-lg-0 mt-md-5">
          <div className="row m-0 mt-md-5 justify-content-center ">
            <div className="col-lg-11 col-12 text-center align-self-center mt-5">
              <div className="display-4 anton text-primarys text-uppercase pb-lg-3 pb-2">
                <span className="text-main">Portfolio</span>
              </div>
              <p className="display-5 text-uppercase  fw-bolder text-primarys pb-2">
                Seeing is Believing:
                <br />
                <span className="text-lessmain">
                  Dive into Our Editing Portfolio
                </span>
              </p>{" "}
            </div>{" "}
            <div
              ref={scrollerRef}
              className="col-12 barshop overflow-x-scroll d-flex text-center justify-content-center   pt-md-5 fw-bolder"
            >
              {portfoliodata.map((i) => {
                return (
                  <div
                    className=" text- px-lg-4 px-2 border pointer"
                    style={{
                      whiteSpace: "nowrap",
                      width: "max-content",
                    }}
                    onClick={() => {
                      setslectedcetagory(i.name);
                    }}
                  >
                    {i.name}
                  </div>
                );
              })}
            </div>
            <div className="col-12 mt-md-5 mb-md-0 mb-5">
              <div className="row m-0 mt-md-5 mt-4">
                {portfoliodata
                  .filter((data) => data.name == slectedcetagory)[0]
                  .videos.map((i) => {
                    return (
                      <div className="col-6 px-2 py-2  s">
                        <div className="card border-0 shadow rounded-4 overflow-hidden">
                          <img
                            src={i.thumbnail}
                            alt=""
                            className="img-fluid rounded-4"
                          />
                        </div>{" "}
                        <div
                          className="bg-light d-lg-flex w-75 d-none fw-bolder  rounded-1  overflow-hidden"
                          style={{ transform: "translateY(-100%)" }}
                        >
                          <div className="btn btn-main py-3 px-4 rounded-0">
                            <i
                              class="fa fa-play text-light fs-3"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div className="ps-3 fs-3 align-self-center text-uppercase ">
                            View The
                            <span className="text-main"> Video</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="behind position-absolute end-0 top-0 z-2 pointerer">
          <img
            src="https://marksoln.in/assets/img/images/h3_project_shape.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </>
  );
};

export default HomeSection7;

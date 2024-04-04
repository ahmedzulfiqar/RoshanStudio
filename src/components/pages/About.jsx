import React, { useState } from "react";
import HomeSection2 from "../../components2/home/HomeSection2";
import HomeSection4 from "../../components2/home/HomeSection4";
import HomeSection5 from "../../components2/home/HomeSection5";
import HomeSection6 from "../../components2/home/HomeSection6";
import HomeSection3 from "../../components2/home/HomeSection3";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        className="col-12 vh-100 bg-black p-0 m-0 d-flex align-items-center justify-content-center  "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
        }}
      >
        <div className="overlaygradient w-100"></div>
        <div className="container px-0 ps-lg-0 ps-2">
          <div className="row position-relative z-2 m-0">
            <div className="col-md-7 ">
              <div
                className="text-light anton   text-uppercase display-1"
                style={{}}
              >
                About <span className="text-main"> Roshan Studio</span>
              </div>
              <p className="text-light py-4 fs-4">
                Where the magic happens. From concepts to final video edits,
                we're talking bold ideas that deliver real results. Ready for
                remarkable
              </p>
              <div className="btn btn-lg fs-4 mt-lg-3 btn-main text-uppercase text-light anton px-3 py-3 rounded-1">
                <i
                  class="fa fa-play align-self-center pe-3 fs-3"
                  aria-hidden="true"
                ></i>{" "}
                play ShowReel
              </div>
              <img
                src="https://www.venturevideos.com/hs-fs/hubfs/Untitled%20design%20(39).png?width=1080&height=1080&name=Untitled%20design%20(39).png"
                alt=""
                className="img-fluid position-absolute w-25 arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <HomeSection2 />
      <div
        className="bg-new border d-flex align-items-center"
        style={{ minHeight: "75vh" }}
      >
        <div class="container px-0 ps-lg-0 ps-2">
          <div className="row m-0 justify-content-between">
            <div className="col-lg-6 col-12 text-start d-md-block d-none align-self-center">
              <div className="display-2 anton text-uppercase text-primarys pb-lg-4 pb-2">
                About Us
              </div>
              <p className="fs-5">
                Make an impact with Roshan Studio the go-to video production
                agency for brands.
              </p>
              <p className="fs-5">
                We work with fast growing start ups and enterprise brands around
                the globe who want to win new customers with the power of video
                marketing.
              </p>
              <p className="fs-5">
                At Roshan Studio, we never settle for average, we want you to
                shine brightly and help you change the world!
              </p>{" "}
              <Link
                to="/contact"
                className="btn btn-lg fs-4 mt-lg-4 btn-main text-uppercase text-light anton px-3 py-3 rounded-1"
              >
                Got a Project? Lets talk!
              </Link>
            </div>{" "}
            <div className="col-lg-6 col-12 mt-md-3 py-5 text-start d-md-none d-block">
              <div className="display-5 anton text-primarys pb-lg-4 pb-3">
                A NEW KIND OF VIDEO PRODUCTION AGENCY
              </div>
              <p className="fs-6 small">
                Make an impact with Roshan Studio the go-to video production
                agency for brands.
              </p>
              <p className="fs-6 small">
                We work with fast growing start ups and enterprise brands around
                the globe who want to win new customers with the power of video
                marketing.
              </p>
              <p className="fs-6 small">
                At Venture, we never settle for average, we want you to shine
                brightly and help you change the world!
              </p>{" "}
              <Link
                to="/contact"
                className="btn btn-lg fs-5 mt-lg-4 mt-2 btn-main text-uppercase text-light anton px-3 py-3 rounded-1"
              >
                Got a Project? Lets talk!
              </Link>
            </div>
            <div className="col-lg-5 col-12 align-self-center my-md-5 mb-4 ">
              <img
                src="https://467997.fs1.hubspotusercontent-na1.net/hub/467997/hubfs/manifesto.webp?width=1000&name=manifesto.webp"
                alt=""
                className="img-fluid rounded-2"
              />
              <div
                className="bg-light d-lg-flex d-none fw-bolder shadow-sm rounded-1 mx-3 overflow-hidden"
                style={{ transform: "translateY(-49px)" }}
              >
                <div className="btn btn-main py-3 px-4 rounded-0">
                  <i class="fa fa-play text-light fs-3" aria-hidden="true"></i>
                </div>
                <div className="ps-3 fs-5 align-self-center ">
                  LEARN MORE ABOUT{" "}
                  <span className="text-main">ROSHAN STUDIO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeSection6 />
      <div className="overlaygradient w-100"></div>
      <HomeSection5 />
    </>
  );
};
export default About;

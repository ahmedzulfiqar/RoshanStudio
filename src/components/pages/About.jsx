import React, { useState } from "react";
import HomeSection2 from "../../components2/home/HomeSection2";
import HomeSection4 from "../../components2/home/HomeSection4";
import HomeSection5 from "../../components2/home/HomeSection5";
import HomeSection6 from "../../components2/home/HomeSection6";
import HomeSection3 from "../../components2/home/HomeSection3";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const [open, setopen] = useState(false);
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
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="container px-0 ps-lg-0 ps-2"
        >
          <div className="row position-relative z-2 m-0">
            <div className="col-md-7 ">
              <div
                className="text-light Mazzard   text-uppercase display-1"
                style={{}}
              >
                About <br /> <span className="text-main"> Roshan Studio</span>
              </div>
              <p className="text-light py-4 fs-4 jakarta">
                Where the magic happens. From concepts to final video edits,
                we're talking bold ideas that deliver real results. Ready for
                remarkable
              </p>
              <motion.div
                className="btn btn-lg fs-4 mt-lg-4 btn-main text-uppercase text-light anton px-3 py-3 rounded-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={() => setopen(!open)}
              >
                <i
                  className="fa fa-play align-self-center pe-3 fs-3 jakarta"
                  aria-hidden="true"
                ></i>{" "}
                play ShowReel
              </motion.div>
              {open && (
                <>
                  <button
                    className="close-button position-absolute z-3 d-md-block d-none"
                    onClick={() => setopen(false)}
                  >
                    <i className="fa fa-times z-3"></i>
                  </button>
                  <div className="video-container z-1 d-flex justify-content-center align-items-center">
                    <iframe
                      width="100%"
                      height="400"
                      src="https://www.youtube.com/embed/NcBjx_eyvxc?si=8IcboviRNbONyyD0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                      className="d-md-block d-none"
                    ></iframe>
                  </div>{" "}
                  <button
                    className="close-buttons position-absolute d-md-none z-3"
                    style={{top:"10px"}}
                    onClick={() => setopen(false)}
                  >
                    <i className="fa fa-times "></i>
                  </button> 
                  <div className="video-container d-flex justify-content-center align-items-center w-100">
                   <iframe
                      width="100%" // Change width to 100%
                      height="315"
                      src="https://www.youtube.com/embed/NcBjx_eyvxc?si=8IcboviRNbONyyD0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                      className="d-md-none d-block z-2"
                    ></iframe>
                  </div>
                </>
              )}
              <motion.img
                src="https://www.venturevideos.com/hs-fs/hubfs/Untitled%20design%20(39).png?width=1080&height=1080&name=Untitled%20design%20(39).png"
                alt=""
                className="img-fluid position-absolute w-25 arrow"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <HomeSection2 />
      <div
        className="bg-new border d-flex align-items-center"
        style={{ minHeight: "75vh" }}
      >
        <motion.div class="container px-0 ps-lg-0 ps-2">
          <div className="row m-0 justify-content-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="col-lg-6 col-12 text-start d-md-block d-none align-self-center"
            >
              <div className="display-2 Mazzard text-uppercase text-primarys pb-lg-4 pb-2">
                About Us
              </div>
              <p className="fs-5 jakarta">
                Make an impact with Roshan Studio the go-to video production
                agency for brands.
              </p>
              <p className="fs-5 jakarta">
                We work with fast growing start ups and enterprise brands around
                the globe who want to win new customers with the power of video
                marketing.
              </p>
              <p className="fs-5 jakarta">
                At Roshan Studio, we never settle for average, we want you to
                shine brightly and help you change the world!
              </p>{" "}
              <Link
                to="/contact"
                className="btn btn-lg fs-4 mt-lg-4 btn-main text-uppercase text-light anton px-3 py-3 rounded-1"
              >
                Got a Project? Lets talk!
              </Link>
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="col-lg-6 col-12 mt-md-3 py-5 text-start d-md-none d-block"
            >
              <div className="display-5 Mazzard text-primarys pb-lg-4 pb-3">
                A NEW KIND OF VIDEO PRODUCTION AGENCY
              </div>
              <p className="fs-6 small jakarta">
                Make an impact with Roshan Studio the go-to video production
                agency for brands.
              </p>
              <p className="fs-6 small jakarta">
                We work with fast growing start ups and enterprise brands around
                the globe who want to win new customers with the power of video
                marketing.
              </p>
              <p className="fs-6 small jakarta">
                At Venture, we never settle for average, we want you to shine
                brightly and help you change the world!
              </p>{" "}
              <Link
                to="/contact"
                className="btn btn-lg fs-5 mt-lg-4 mt-2 btn-main text-uppercase text-light anton px-3 py-3 rounded-1"
              >
                Got a Project? Lets talk!
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="col-lg-5 col-12 align-self-center my-md-5 mb-4 "
            >
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
                <div className="ps-3 fs-5 align-self-center Mazzard ">
                  LEARN MORE ABOUT{" "}
                  <span className="text-main">ROSHAN STUDIO</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <HomeSection6 />
      <HomeSection5 />
    </>
  );
};
export default About;

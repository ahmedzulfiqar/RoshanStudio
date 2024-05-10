import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const card_data = [
    {
      imgs: "https://www.venturevideos.com/hubfs/explainer%20video%201.webp",
      heading: "Explainer Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Billy%20thumbnails/BDO%20-%20Lets%20talk%20about%20race%20%280-00-02-17%29.webp",
      heading: "Promotional Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Optimised%20website%20images/albert%20optimised.webp",
      heading: "Animated Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/explainer%20video%201.webp",
      heading: "Explainer Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Billy%20thumbnails/BDO%20-%20Lets%20talk%20about%20race%20%280-00-02-17%29.webp",
      heading: "Promotional Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Optimised%20website%20images/albert%20optimised.webp",
      heading: "Animated Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/explainer%20video%201.webp",
      heading: "Explainer Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Billy%20thumbnails/BDO%20-%20Lets%20talk%20about%20race%20%280-00-02-17%29.webp",
      heading: "Promotional Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Optimised%20website%20images/albert%20optimised.webp",
      heading: "Animated Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/explainer%20video%201.webp",
      heading: "Explainer Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Billy%20thumbnails/BDO%20-%20Lets%20talk%20about%20race%20%280-00-02-17%29.webp",
      heading: "Promotional Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Optimised%20website%20images/albert%20optimised.webp",
      heading: "Animated Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
  ];
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
          transition={{ delay: 0.5, duration: 0.6 }}
          className="container px-0 ps-lg-0 ps-2"
        >
          <div className="row position-relative z-2 m-0">
            <div className="col-md-7 ">
              <div
                className="text-light Mazzard   text-uppercase display-1"
                style={{}}
              >
                Our <span className="text-main"> Services</span>
              </div>
              <motion.p
                className="text-light py-4 fs-4 jakarta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6}}
              >
                Where the magic happens. From concepts to final video edits,
                we're talking bold ideas that deliver real results. Ready for
                remarkable
              </motion.p>
              <motion.div
                className="btn btn-lg fs-4 mt-lg-2 btn-main text-uppercase text-light anton px-3 py-3 rounded-1"
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
                transition={{ delay: 0.5, duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className="border -main d-flex align-items-center position-relative "
        style={{ minHeight: "75vh" }}
      >
        <div class="container py-5 mt-md-3 mt-0">
          <div className="row justify-content-center mt-md-4 mt-2 mx-0 text-start">
            <div className="row justify-content-center pt-2">
              {card_data.map((i) => {
                return (
                  <motion.div
                    className="col-lg-4 col-md-6 col-12 m-0 my-md-4 my-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <div className="col-12 p-0 ">
                      <img
                        src={i.imgs}
                        className="img-fluid  rounded-2 w-100"
                        style={{ height: "22vh" }}
                      />
                      <h3 className="pt-lg-4 pt-4 Mazzard fs-3 ">{i.heading}</h3>
                      <p className="pt-0 jakarta">{i.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
const HomeSection4 = () => {
  return (
    <>
      <div
        className="bg-main border d-flex align-items-center position-relative overflow-hidden"
        style={{ minHeight: "65vh" }}
      >
        <div class="container px-0 ps-lg-0 ps-2">
          <div className="row m-0 justify-content-between">
            <motion.div
              className="col-lg-6 order-1 col-12 text-start d-md-block d-none align-self-center ps-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="display-3 ms-1 anton text-light text-uppercase pb-lg-4 pb-2 ">
                Producing videos for brands{" "}
                <span className="text-primarys"> worldwide</span>{" "}
              </div>
              <p className="fs-5 text-light ms-1">
                With a worldwide network of creative & production talent, Roshan
                Studio is the perfect video production agency for clients
                operating in the UK, Europe, North America & Asia.
              </p>

              <Link
                to="/about"
                className="btn ms-1 btn-lg fs-4 mt-lg-4 btn-primarys text-uppercase text-light anton px-3 py-3 rounded-1"
              >
                Learn More About Us
              </Link>
            </motion.div>{" "}
            <motion.div
              className="col-lg-6 col-12 mt-md-3 py-5 text-start d-md-none d-block"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="display-4 anton text-light pb-lg-4 pb-3">
                Producing videos for brands{" "}
                <span className="text-primarys"> worldwide</span>{" "}
              </div>
              <p className="fs-6 small text-light">
                With a worldwide network of creative & production talent, Roshan
                Studio is the perfect video production agency for clients
                operating in the UK, Europe, North America & Asia.
              </p>
              <Link
                to="/about"
                className="btn btn-lg fs-5 mt-lg-4 mt-2 btn-primarys text-uppercase text-light anton px-3 py-3 rounded-1"
              >
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div
              className="col-lg-6 order-0 col-12 align-self-center my-md-5 mb-4 "
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/dxu97wnd-Z4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="d-md-block d-none"
              ></iframe>{" "}
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/dxu97wnd-Z4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="d-md-none d-block"
              ></iframe>
            </motion.div>
          </div>
        </div>{" "}
        <motion.div
          className="behind position-absolute end-0 top-0 z-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://marksoln.in/assets/img/images/h3_project_shape.png"
            alt=""
            className="img-fluid"
          />
        </motion.div>
      </div>
    </>
  );
};

export default HomeSection4;

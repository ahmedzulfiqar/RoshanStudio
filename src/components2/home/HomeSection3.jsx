import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
const HomeSection3 = () => {
  return (
    <>
      <div
        className="bg-new border d-flex align-items-center"
        style={{ minHeight: "75vh" }}
      >
        <div class="container px-0 ps-lg-0 ps-2">
          <div className="row m-0 justify-content-between">
            <motion.div
              className="col-lg-6 col-12 text-start d-md-block d-none align-self-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="display-4 anton text-primarys pb-lg-4 pb-2">
                A NEW KIND OF VIDEO PRODUCTION AGENCY
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
                At Venture, we never settle for average, we want you to shine
                brightly and help you change the world!
              </p>{" "}
              <Link
                to="/contact"
                className="btn btn-lg fs-4 mt-lg-4 btn-main text-uppercase text-light anton px-3 py-3 rounded-1"
              >
                Got a Project? Lets talk!
              </Link>
            </motion.div>{" "}
            <motion.div
              className="col-lg-6 col-12 mt-md-3 py-5 text-start d-md-none d-block"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
            <motion.div
              className="col-lg-5 col-12 align-self-center my-md-5 mb-4 "
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
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
                <div className="ps-3 fs-5 align-self-center ">
                  LEARN MORE ABOUT{" "}
                  <span className="text-main">ROSHAN STUDIO</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection3;

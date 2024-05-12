import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const HomeSection6 = () => {
  return (
    <>
      <div
        className="bg-main border d-flex align-items-center position-relative overflow-hidden"
        style={{ minHeight: "75vh" }}
      >
        <div className="container px-0 ps-lg-0 ps-2">
          <div className="row m-0 justify-content-between  mt-md-0 mt-3">
            <div className="col-lg-6 col-12 text-start d-md-block d-none align-self-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="display-3 Mazzard text-light text-uppercase pb-lg-4 pb-2">
                  Our <span className="text-dark">Values</span>
                </div>
                <p className="fs-5 text-light pb-4 jakarta">
                  At our video editing agency, we breathe life into your
                  stories. We believe that editing is the heartbeat of your
                  visual narrative, and we're here to make it pulse with
                  creativity and precision.
                </p>{" "}
                <div className="d-flex pb-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5288/5288411.png"
                    alt=""
                    className="img-fluid "
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="d-block ps-4">
                    <div className="fs-4 anton text-light text- pb-lg-2 pb-2 Mazzard-2">
                      Consistency
                    </div>
                    <p className="fs-5 text-light pb-2 jakarta">
                      Delivering jaw-dropping video edits, ensuring your vision
                      is brought to life with unwavering excellence.
                    </p>{" "}
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img
                    src="https://i.pinimg.com/originals/88/85/de/8885de3758607c3f87f26a8b5105eb76.png"
                    alt=""
                    className="img-fluid "
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="d-block ps-4">
                    <div className="fs-4 anton text-light text- pb-lg-2 pb-2  Mazzard-2">
                      Creativity
                    </div>
                    <p className="fs-5 text-light pb-2 jakarta">
                      Infusing innovation into every frame, expertly weaving
                      enduring and unforgettable visual narratives.
                    </p>{" "}
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/project-management-2-12/65/108-1024.png"
                    alt=""
                    className="img-fluid "
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="d-block ps-4">
                    <div className="fs-4 anton text-light text- pb-lg-2 pb-2  Mazzard-2">
                      Diverse Skillset
                    </div>
                    <p className="fs-5 text-light pb-2 jakarta">
                      Proficient in various styles and genres, turning your
                      ideas into captivating videos. Versatility is our
                      strength.
                    </p>{" "}
                  </div>
                </div>
              </motion.div>
            </div>{" "}
            <div className="col-lg-6 col-12 mt-md-3 py-5 text-start d-md-none d-block">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="display-2 Mazzard text-light pb-lg-4 pb-3  text-uppercase">
                  Our <span className="text-primarys">Values</span>
                </div>
                <p className="fs-6 small text-light pb-4 jakarta">
                  At our video editing agency, we breathe life into your
                  stories. We believe that editing is the heartbeat of your
                  visual narrative, and we're here to make it pulse with
                  creativity and precision.
                </p>{" "}
                <div className="d-flex pb-3">
                  <img
                    src="https://marksoln.in/assets/img/icon/about_icon01.png"
                    alt=""
                    className="img-fluid "
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="d-block ps-4">
                    <div className="fs-4 anton text-light text- pb-lg-2 pb-2 Mazzard-2">
                      Consistency
                    </div>
                    <p className="-6 small text-light pb-2 jakarta">
                      Delivering jaw-dropping video edits, ensuring your vision
                      is brought to life with unwavering excellence.
                    </p>{" "}
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img
                    src="https://marksoln.in/assets/img/icon/about_icon02.png"
                    alt=""
                    className="img-fluid "
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="d-block ps-4">
                    <div className="fs-4 anton text-light text- pb-lg-2 pb-2 Mazzard-2">
                      Creativity
                    </div>
                    <p className="-6 small text-light pb-2 jakarta">
                      Infusing innovation into every frame, expertly weaving
                      enduring and unforgettable visual narratives.
                    </p>{" "}
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img
                    src="https://marksoln.in/assets/img/icon/about_icon03.png"
                    alt=""
                    className="img-fluid "
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="d-block ps-4">
                    <div className="fs-4 anton text-light text- pb-lg-2 pb-2 Mazzard-2">
                      Diverse Skillset
                    </div>
                    <p className="-6 small text-light pb-2 jakarta">
                      Proficient in various styles and genres, turning your
                      ideas into captivating videos. Versatility is our
                      strength.
                    </p>{" "}
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-5 col-12 align-self-center my-md-5 mb-4 d-md-block d-none ">
              <motion.img
                src="https://images.unsplash.com/photo-1490971588422-52f6262a237a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="img-fluid rounded-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>{" "}
        <div className="behind position-absolute end-0 top-0 z-2">
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

export default HomeSection6;

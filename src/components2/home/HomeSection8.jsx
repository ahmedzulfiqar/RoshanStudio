import React from "react";
import { motion } from "framer-motion";

const HomeSection8 = () => {
  return (
    <>
      <div
        className="bg-main border d-flex align-items-center position-relative pe-2"
        style={{ minHeight: "66vh" }}
      >
        <div className="container px-0 ps-lg-0 ps-2 py-5">
          <div className="row m-0 justify-content-between">
            <div className=" col-md-10 col-12 text-start d-md-block d-none  align-self-center ps-md-0">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="display-3  text-light text-uppercase pb-lg-4 pb-2 Mazzard">
                  why to chose
                  <span className="text-dark"> roshan studio</span>
                </div>
                <p className="fs-5 text-light jakarta">
                  At our video editing agency, we breathe life into your
                  stories. We believe that editing is the heartbeat of your
                  visual narrative, and we're here to make it pulse with
                  creativity and precision.
                </p>
              </motion.div>
            </div>
            <div className="col-md-8 col-12 text-start d-md-none d-block  align-self-center ps-md-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="display-2  text-light text-uppercase pb-lg-4 pb-2  Mazzard">
                  why to chose
                  <span className="text-dark"> roshan studio</span>
                </div>
                <p className="fs-6 small text-light jakarta">
                  At our video editing agency, we breathe life into your
                  stories. We believe that editing is the heartbeat of your
                  visual narrative, and we're here to make it pulse with
                  creativity and precision.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row justify-content-between mt-md-4 mt-2 m-0 ">
            <div className="row justify-content-center pt-2 m-0">
              <div className="col-md-6 col-lg-3 col-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  <div className="rounded-lg rounded bg-translucent my-2   text-center p-md-5 py-4 px-3">
                    <div className="card-body">
                      <h1 className="text-white display-5 fw-bold">900+</h1>
                      <h5
                        className="text-dark "
                        style={{ fontFamily: "ttf b" }}
                      >
                        Quality Checks
                      </h5>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-6 col-lg-3 col-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  <div className="rounded-lg rounded bg-translucent my-2  text-center p-md-5 py-4 px-3">
                    <div className="card-body">
                      <h1 className="display-5 text-white fw-bold">15+</h1>
                      <h5
                        className="text-dark "
                        style={{ fontFamily: "ttf b" }}
                      >
                        Happy Clients
                      </h5>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-6 col-lg-3 col-6  text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  <div className="rounded-lg rounded bg-translucent my-2  text-center p-md-5 py-4 px-3">
                    <div className="card-body">
                      <h1 className="display-5 text-white fw-bold">350+</h1>
                      <h5
                        className="text-dark "
                        style={{ fontFamily: "ttf b" }}
                      >
                        Projects Completed
                      </h5>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-6 col-lg-3 col-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  <div className="rounded-lg rounded bg-translucent my-2  text-center p-md-5 py-4 px-3">
                    <div className="card-body">
                      <h1 className="display-5 fw-bold text-white">100+</h1>
                      <h5
                        className="text-dark "
                        style={{ fontFamily: "ttf b" }}
                      >
                        Team Members
                      </h5>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection8;

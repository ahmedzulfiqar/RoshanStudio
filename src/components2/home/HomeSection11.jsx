import React from "react";
import { motion } from "framer-motion";

const HomeSection11 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="bg-new border d-flex align-items-center"
      style={{ minHeight: "75vh" }}
    >
      <div class="container px-0 ps-lg-0 ps-2">
        <div className="row m-0 justify-content-between">
          <div className="col-lg-6 col-12  mt-md-0  text-start d-md-block d-none align-self-center">
            <h2 className="fs-6 mt-4 mb-2">
              <img
                src="https://marksoln.in/assets/img/icon/inner_services_icon04.png"
                alt=""
                className="img-fluid"
              />
            </h2>
            <motion.div
              className="display-5 anton text-primarys pb-lg-4 pb-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              Boost Your Business: <br />{" "}
              <span className="text-main"> Free Consultation</span>, Awaits!
            </motion.div>
            <p
              className="fs-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              At Roshan Studio, we amplify your business using the power of
              video. Imagine transforming your brand with engaging video content
              that captivates your audience and boosts your online presence. Our
              team of experts can help you create videos that will boost your
              sales, or improve your brand awareness. Don't let this opportunity
              slip away - unlock your potential through video magic. Claim your
              consultation now!
            </p>
            <div className="row   my-4 my-md-5">
              <div className="col-12 col-md-5 d-flex">
                <h2>
                  <img
                    src="https://marksoln.in/assets/img/icon/consultation_icon01.png"
                    alt=""
                    className="img-fluid align-self-center "
                  />
                </h2>{" "}
                <h5 className="fs-4 text-black fw-bolder ps-3 align-self-center">
                  Strategic Roadmap
                </h5>
              </div>
              <div className="col-12 col-md-5 d-flex">
                <h2>
                  <img
                    src="https://marksoln.in/assets/img/icon/consultation_icon01.png"
                    alt=""
                    className="img-fluid align-self-center "
                  />
                </h2>{" "}
                <h5 className="fs-4 text-black fw-bolder ps-3 align-self-center">
                  Strategic Roadmap
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12  mt-md-0  text-start d-md-none d-block align-self-center">
            <h2 className="fs-6 mt-4 mb-2">
              <img
                src="https://marksoln.in/assets/img/icon/inner_services_icon04.png"
                alt=""
                className="img-fluid"
              />
            </h2>
            <motion.div
              className="display-3 anton text-primarys pb-lg-4 pb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Boost Your Business: <br />{" "}
              <span className="text-main"> Free Consultation</span>, Awaits!
            </motion.div>
            <p
              className=""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              At Roshan Studio, we amplify your business using the power of
              video. Imagine transforming your brand with engaging video content
              that captivates your audience and boosts your online presence. Our
              team of experts can help you create videos that will boost your
              sales, or improve your brand awareness. Don't let this opportunity
              slip away - unlock your potential through video magic. Claim your
              consultation now!
            </p>
            <div className="row   my-4 my-md-5">
              <div className="col-12 col-md-5 d-flex">
                <h2>
                  <img
                    src="https://marksoln.in/assets/img/icon/consultation_icon01.png"
                    alt=""
                    className="img-fluid align-self-center w-75 "
                  />
                </h2>{" "}
                <h5 className="fs-4 text-black fw-bolder ps-1 align-self-center">
                  Strategic Roadmap
                </h5>
              </div>
              <div className="col-12 col-md-5 d-flex">
                <h2>
                  <img
                    src="https://marksoln.in/assets/img/icon/consultation_icon01.png"
                    alt=""
                    className="img-fluid align-self-center w-75 "
                  />
                </h2>{" "}
                <h5 className="fs-4 text-black fw-bolder ps-1 align-self-center">
                  Strategic Roadmap
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-12 align-self-center my-md-5 mb-4 p-md-5">
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1627244714766-94dab62ed964?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="img-fluid rounded-2"
            />
          </div>
        </div>
      </div>
      <div className="behind position-absolute  end-0 z-0 pointerer">
        <img
          src="https://marksoln.in/assets/img/images/h3_project_shape.png"
          alt=""
          className="img-fluid"
        />
      </div>
    </motion.div>
  );
};

export default HomeSection11;

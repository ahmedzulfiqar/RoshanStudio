import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeSection9 = () => {
  return (
    <>
      <div
        className="border d-flex align-items-center position-relative "
        style={{ minHeight: "75vh" }}
      >
        <div className="container py-5 mt-md-3 mt-0">
          <div className="row m-0 justify-content-center">
            <div className=" col-md-8 col-12 text-center d-md-block d-none  align-self-center ps-md-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="display-3 anton text-dark text-uppercase pb-lg-4 pb-2 ">
                  Getting started is a<span className="text-main"> breeze</span>
                </div>
                <p className="fs-5 text-dark">
                  Over the last 18 years we've developed a fully managed end to
                  end video production process that not only delivers amazing
                  results, it also makes us exceptionally easy to work with.
                </p>
              </motion.div>
            </div>
            <div className="col-md-8 col-12 text-start d-md-none d-block  align-self-center ps-md-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="display-2 anton text-dark text-uppercase pb-lg-4 pb-2 ">
                  Getting started is a<span className="text-main"> breeze</span>
                </div>
                <p className="fs-6 small text-dark">
                  Over the last 18 years we've developed a fully managed end to
                  end video production process that not only delivers amazing
                  results, it also makes us exceptionally easy to work with.
                </p>
              </motion.div>
            </div>{" "}
          </div>
          <div className="row justify-content-center mt-md-4 mt-2 mx-0 text-center">
            <div className="row justify-content-center pt-2">
              <div className="col-md-6 col-lg-4 col-12 text-center">
                <motion.div
                  className="rounded-lg rounded bg-new my-2  text-center p-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-body">
                    <h4>
                      <i className="fa fa-thumbs-up text-info display-4 mb-2"></i>
                    </h4>
                    <h4 className="text-info text-uppercase fw-bold">
                      Project kick-off
                    </h4>
                    <p className="text-dark ">
                      Let's commence your onboarding session with an in-depth
                      discussion regarding the proposed schedule. Following
                      that, we'll delve into outlining each step. We'll lay out
                      the next steps comprehensively.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-6 col-lg-4 col-12 text-center">
                <motion.div
                  className="rounded-lg rounded bg-new my-2  text-center p-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-body">
                    <h4>
                      <i className="fa fa-phone text-primary display-4 mb-2"></i>
                    </h4>
                    <h4 className="text-uppercase  text-primary fw-bold">
                      Book a call
                    </h4>
                    <p className="text-dark">
                      It all starts with a chat. As a strategic partner, we'll
                      learn all about you, your business, your product offering,
                      your target customer, your marketing priorities and your
                      immediate video needs.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-6 col-lg-4 col-12 text-center">
                <motion.div
                  className="rounded-lg rounded bg-new my-2  text-center p-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-body">
                    <h4>
                      <i className="fa fa-newspaper text-danger display-4 mb-2"></i>
                    </h4>
                    <h4 className="text-uppercase  text-danger fw-bold">
                      Creative presentation
                    </h4>
                    <p className="text-dark">
                      We'll present our ideas to your team, taking you on a
                      journey through our creative vision for your project.
                      Here's where you'll see initial concepts for how your
                      video might look, sound and feel.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-2 mt-md-0">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                class="btn btn-lg fs-5 mt-lg-4 mt-2 btn-main text-uppercase text-light anton px-3 py-3 rounded-1"
              >
                CONTACT US
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection9;

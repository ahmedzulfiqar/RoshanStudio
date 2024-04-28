import React from "react";
import HomeSection2 from "../../components2/home/HomeSection2";
import HomeSection3 from "../../components2/home/HomeSection3";
import HomeSection4 from "../../components2/home/HomeSection4";
import HomeSection5 from "../../components2/home/HomeSection5";
import HomeSection6 from "../../components2/home/HomeSection6";
import HomeSection7 from "../../components2/home/HomeSection7";
import HomeSection8 from "../../components2/home/HomeSection8";
import HomeSection9 from "../../components2/home/HomeSection9";
import HomeSection10 from "../../components2/home/HomeSection10";
import HomeSection11 from "../../components2/home/HomeSection11";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        className="col-12 vh-100 bg-black p-0 m-0 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
        }}
      >
        <div className="overlaygradient w-100"></div>
        <div className="container px-0 ps-lg-0 ps-2">
          <div className="row position-relative z-2 m-0">
            <motion.div
              className="col-md-7"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <div className="text-light anton display-1">
                <motion.span className="text-light">
                  VIDEO PRODUCTION FOR
                </motion.span>{" "}
                <span className="text-main"> BRANDS</span>
              </div>
              <motion.p
                className="text-light py-4 fs-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                Roshan Studio is a full-service video production agency that
                helps brands to win new customers with creative content &
                campaigns
              </motion.p>
              <motion.div
                className="btn btn-lg fs-4 mt-lg-2 btn-main text-uppercase text-light anton px-3 py-3 rounded-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <i
                  className="fa fa-play align-self-center pe-3 fs-3"
                  aria-hidden="true"
                ></i>{" "}
                play ShowReel
              </motion.div>
              <motion.img
                src="https://www.venturevideos.com/hs-fs/hubfs/Untitled%20design%20(39).png?width=1080&height=1080&name=Untitled%20design%20(39).png"
                alt=""
                className="img-fluid position-absolute w-25 arrow"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <HomeSection2 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection7 />
      <HomeSection6 />
      <HomeSection8 />
      <HomeSection9 />
      <HomeSection10 />
      <HomeSection11 />
    </>
  );
}

export default Home;

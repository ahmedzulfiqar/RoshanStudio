import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
const HomeSection2 = () => {
  const OBJ_LOGOS = [
    {
      imgs: "https://logodix.com/logo/1069299.png",
    },
    {
      imgs: "https://logodix.com/logo/1069299.png",
    },
    {
      imgs: "https://logodix.com/logo/1069299.png",
    },
    {
      imgs: "https://logodix.com/logo/1069299.png",
    },
  ];
  const variants = {
    hidden: { opacity: 0, transform: "translateY(-10px)" },
    visible: { opacity: 1, transform: "translateY(0px)" },
  };

  return (
    <>
      <motion.div className="bg-main">
        <div class="container py-lg-5 py-4 px-0 ps-lg-0 ps-2">
          <div className="row m-0 ">
            <div className="col-12 py-3  ">
              <motion.div
                className="display-5 anton text-light  mb-lg-3 mb-2"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}
              >
                TRUSTED BY TOP COMPANIES
              </motion.div>
            </div>
          </div>
          <motion.div
            className="row m-0 justify-content-start "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="col-12">
              <Swiper
                draggable={true}
                grabCursor={true}
                className="mySwiper"
                slidesPerView={3}
                modules={[Autoplay]}
                autoplay={true}
                spaceBetween={14}
                breakpoints={{
                  640: {
                    slidesPerView: 5,
                    spaceBetween: 70,
                  },
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 70,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 80,
                  },
                }}
              >
                {OBJ_LOGOS.map((i) => {
                  return (
                    <SwiperSlide>
                      <img src={i.imgs} alt="" className="img-fluid" />
                    </SwiperSlide>
                  );
                })}{" "}
                {OBJ_LOGOS.map((i) => {
                  return (
                    <SwiperSlide>
                      <img src={i.imgs} alt="" className="img-fluid" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeSection2;

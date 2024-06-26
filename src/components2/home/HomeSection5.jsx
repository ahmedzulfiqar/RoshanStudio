import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const HomeSection5 = () => {
  const card_data = [
    {
      heading: "Explainer Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
      embeddedVideoUrl: "https://www.youtube.com/embed/1Y5ibg1I10E?si=qi1Bwt1MMT_0jucf",
    },
    {
      heading: "Promotional Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
      embeddedVideoUrl: "https://www.youtube.com/embed/z2TmN5Epe8Q?si=IW-FByor-lIOK2jJ",
    },
    {
      heading: "Animated Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
      embeddedVideoUrl: "https://www.youtube.com/embed/G0LLmkUQZxQ?si=kAvCvvL6iKTfbeHX",
    },
  ];
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <>
      <div
        className="bg-new border d-flex align-items-center position-relative pe-2"
        style={{ minHeight: "75vh" }}
      >
        <div class="container  px-0 ps-lg-0 ps-2 py-5">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            className="row m-0 justify-content-between "
          >
            <div className=" col-md-8 col-12 text-start d-md-block d-none  align-self-center ps-md-0">
              <div className="display-3 Mazzard text-primarys text-uppercase pb-lg-4 pb-2 ">
                our
                <span className="text-main"> services</span>
              </div>
              <p className="fs-5 text-primarys jakarta">
                Let's unlock the potential of your brand. Whatever kind of video
                you're after, we’re here to create engaging content that’s the
                perfect fit for your audience.
              </p>
            </div>{" "}
            <div className=" col-md-8 col-12 text-start d-md-none d-block  align-self-center ps-md-0">
              <div className="display-2 Mazzard text-primarys text-uppercase pb-lg-4 pb-3 ">
                our
                <span className="text-main"> services</span>
              </div>
              <p className="fs-6 small text-primarys jakarta">
                Let's unlock the potential of your brand. Whatever kind of video
                you're after, we’re here to create engaging content that’s the
                perfect fit for your audience.
              </p>
            </div>{" "}
          </motion.div>
          <div className="row mt-lg-5 mt-3 justify-content-center m-0 ">
            <div className="col-12 ">
              <Swiper
                draggable={true}
                grabCursor={true}
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={14}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  360: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  390: {
                    slidesPerView: 1,
                    spaceBetween: 70,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 70,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 70,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {card_data.map((item) => (
                  <SwiperSlide key={item.heading}>
                    <motion.div
                      className="row m-0"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 1 }}
                    >
                      <div className="col-12 p-0">
                        {/* Replace img tag with iframe tag */}
                        <iframe
                          title={item.heading}
                          width="100%"
                          height="200"
                          src={item.embeddedVideoUrl}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
                        <h3 className="pt-lg-4 pt-4 Mazzard">{item.heading}</h3>
                        <p className="pt-0 jakarta">{item.text}</p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default HomeSection5;

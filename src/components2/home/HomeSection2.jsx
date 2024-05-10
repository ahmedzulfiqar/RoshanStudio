import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
const HomeSection2 = () => {
  const OBJ_LOGOS = [
    {
      imgs: "https://yt3.googleusercontent.com/ytc/AIdro_nQ2Dnud7v2EC0tKNCoG74POZx8f73xR825Z1_prpnt0Q=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@VenomTrickshotsOfficial",
    },
    {
      imgs: "https://yt3.googleusercontent.com/0iW2wKkH-GxrVICFxtqTKplgQNu-TlWZK_i58hyruLpoMWkOUG0cW2XDwGRmAazp6IQ_jfY5Hg=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@ravenreveals",
    },
    {
      imgs: "https://yt3.googleusercontent.com/mGpZVzqJ4If9_oT38-6iWaqYG5cNdXvAaoGu-zgbCA_IDol-yfOmhMdueFhCAOkeOtDD5sDD-Q=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@Bodalia/videos",
    },
    {
      imgs: "https://yt3.googleusercontent.com/QTU5355mAgNfs3HciI9G2K-M8kSBEcofKrcpKzUaoZrlaq5ZqsbkpaFuUOKCb41X_y8MDEOzpg=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@KristinasTravels",
    },
    {
      imgs: "https://yt3.googleusercontent.com/ytc/AIdro_kBT6VIUb7zxdlOM42zomJlqY0C78ciSXGU4_PfDzLhkw=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@designsbank",
    },
    {
      imgs: "https://yt3.googleusercontent.com/PYYmHruEIic2ugdWs2tEY444IGOnrDRza-vMg0CZofv4xLxYRmfWgVXSAePQztqmGycelK3Dqg=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@WholesaleTed",
    },
    {
      imgs: "https://yt3.googleusercontent.com/EQdml993pYNoMwYp_Y7HDY7slN1NYXyxiB2e_Rn5wZI51GQR7XXa5BCGl2G84sR1n3Zm0r-pgQ=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@mixedbymatty",
    },
    {
      imgs: "https://yt3.googleusercontent.com/ytc/AIdro_mDL7hfKUiKn5fGpA84l06ejL44os6FB9nd5tz0LbThgw=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@FXCARLOS__",
    },
    {
      imgs: "https://yt3.googleusercontent.com/7dyhevqTg8BpsiN7TsGQS0iaaOrGpuccuwjkStAIMSYtmlDZW5HioCCDeeZKqYuIQlgTDE-FNg=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@Realvilloniboutique/featured",
    },
    {
      imgs: "https://yt3.googleusercontent.com/nhCCRuAYdqjcWmXc7ePn2hxUPR3qmjbIDNnZSbHSwli3ALWQbHzaZ7UFptteV1_SiPbiygo02A=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@itsadvertising",
    },
    {
      imgs: "https://yt3.googleusercontent.com/TqXpUJ0PO3hhesg_7m8Zb3qr4E-FVk1J9wg6AaJ3kZ8HP9iC_ftlUoY91_fHgG2rGnrlDbmgHA=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@SinusDoctor1",
    },
    {
      imgs: "https://yt3.googleusercontent.com/3fcUMeK7FL38pEKEAZNOxHfnq9ONe3YU_wtaiBFQy2zADvMaR-T8V0SCTmn8zmhsmWV0CB6paIg=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@BaignBaigum",
    },
    {
      imgs: "https://yt3.googleusercontent.com/3ctvofHc3Dc-cnUFiMGUGXLDCQ4eVLuSv1JEHsBx5WVxa6yU9IUD3fDdt6b5NPXrL0Aeq-z_=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@martiantech2694",
    },
    {
      imgs: "https://yt3.googleusercontent.com/bNY8kYcb1K_C34XNYzdyKNApVQbXXH6aY2cvB6MF61jDqhxilVpTL0ZVPtUXdReni4X3tjoq=s176-c-k-c0x00ffffff-no-rj",
      a: "https://www.youtube.com/@hotelmoments",
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
                className="display-5 Mazzard text-light  mb-lg-3 mb-2 "
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
                    slidesPerView: 6,
                    spaceBetween: 80,
                  },
                }}
              >
                {OBJ_LOGOS.map((i) => {
                  return (
                    <SwiperSlide>
                      <a href={i.a} target="_blank" rel="noopener noreferrer">
                        <img
                          src={i.imgs}
                          alt=""
                          className="img-fluid"
                          style={{ borderRadius: "50%" }}
                        />
                      </a>
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

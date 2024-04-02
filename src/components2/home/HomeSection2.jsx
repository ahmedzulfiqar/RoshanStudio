import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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

  return (
    <>
      <div className="bg-main">
        <div class="container py-lg-5 py-4 px-0 ps-lg-0 ps-2">
          <div className="row m-0 ">
            <div className="col-12 py-3">
              <div className="display-5 anton text-light  pb-lg-3 pb-2">
                TRUSTED BY TOP COMPANIES
              </div>
            </div>
          </div>
          <div className="row m-0 justify-content-start ">
            <div className="col-12">
              <Swiper
                draggable={true}
                grabCursor={true}
                className="mySwiper"
                slidesPerView={3}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection2;

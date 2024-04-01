import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const HomeSection5 = () => {
  const card_data = [
    {
      imgs: "https://www.venturevideos.com/hubfs/explainer%20video%201.webp",
      heading: "Explainer Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Billy%20thumbnails/BDO%20-%20Lets%20talk%20about%20race%20%280-00-02-17%29.webp",
      heading: "Promotional Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Optimised%20website%20images/albert%20optimised.webp",
      heading: "Animated Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/explainer%20video%201.webp",
      heading: "Explainer Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Billy%20thumbnails/BDO%20-%20Lets%20talk%20about%20race%20%280-00-02-17%29.webp",
      heading: "Promotional Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
    {
      imgs: "https://www.venturevideos.com/hubfs/Optimised%20website%20images/albert%20optimised.webp",
      heading: "Animated Video",
      text: "Simplify the complex with stunning explainer videos that get people excited.",
    },
  ];

  return (
    <>
      <div
        className="bg-new border d-flex align-items-center position-relative pe-2"
        style={{ minHeight: "75vh" }}
      >
        <div class="container  px-0 ps-lg-0 ps-2 py-5">
          <div className="row m-0 justify-content-between ">
            <div className=" col-md-8 col-12 text-start d-md-block d-none  align-self-center ps-md-0">
              <div className="display-3 anton text-primarys text-uppercase pb-lg-4 pb-2 ">
                our
                <span className="text-main"> services</span>
              </div>
              <p className="fs-5 text-primarys">
                Let's unlock the potential of your brand. Whatever kind of video
                you're after, we’re here to create engaging content that’s the
                perfect fit for your audience.
              </p>
            </div>{" "}
            <div className=" col-md-8 col-12 text-start d-md-none d-block  align-self-center ps-md-0">
              <div className="display-2 anton text-primarys text-uppercase pb-lg-4 pb-3 ">
                our
                <span className="text-main"> services</span>
              </div>
              <p className="fs-6 small text-primarys">
                Let's unlock the potential of your brand. Whatever kind of video
                you're after, we’re here to create engaging content that’s the
                perfect fit for your audience.
              </p>
            </div>{" "}
          </div>
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
                {card_data.map((i) => {
                  return (
                    <SwiperSlide>
                      <div className="row m-0">
                        <div className="col-12 p-0 ">
                          <img
                            src={i.imgs}
                            className="img-fluid  rounded-4 w-100"
                            style={{ height: "22vh" }}
                          />
                          <h3 className="pt-lg-4 pt-3 anton ">{i.heading}</h3>
                          <p className="pt-0">{i.text}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default HomeSection5;

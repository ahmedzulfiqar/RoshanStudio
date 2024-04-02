import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import "swiper/css/scrollbar";

const HomeSection10 = () => {
  const data = [
    { data_name: "123" },
    { data_name: "123" },
    { data_name: "123" },
    { data_name: "123" },
    { data_name: "123" },
    { data_name: "123" },
    { data_name: "123" },
  ];
  const swiper = useSwiper();
  return (
    <div
      className="bg-main border d-flex align-items-center position-relative ps-2"
      style={{ minHeight: "75vh" }}
    >
      <div className="container px-0 ps-lg-0 ps-2 py-5">
        <div className="row m-0 justify-content-between">
          <div className="col-md-8 col-12 text-start d-md-block d-none align-self-center ps-md-0">
            <p className="fs-2 text-uppercase fw-bolder">Testimonials</p>
            <div className="display-3 anton text-warning text-uppercase pb-lg-2 pb-2">
              Client Stories:
            </div>
            <div className="display-5 fw-bolder text-light pb-lg-2 pb-2">
              Why They Choose Us
            </div>
          </div>
          <div className="col-md-8 col-12 text-start d-md-none d-block align-self-center ps-md-0">
            <p className="fs-2 fw-semibold">Testimonials</p>
            <div className="display-3 anton small text-warning pb-lg-2 pb-2">
              Client Stories:
            </div>
            <div className="display-5 small fw-bolder text-light pb-lg-2 pb-2">
              Why They Choose Us
            </div>
          </div>
        </div>

        <div className="row m-0 justify-content-start ">
          <div className="col-md-12 col-12 py-md-3">
            {" "}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              slidesPerView={1}
              spaceBetween={50}
              style={{ paddingTop: "80px" }}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                  spaceBetween: 70,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 70,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 70,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card ps-0">
                    <div className="card-body px-4">
                      <h2 className="text-center d-md-block d-none">
                        <img
                          src="https://marksoln.in/assets/img/images/testimonial-pw.png"
                          alt=""
                          className="img-fluid position-absolute start-0 w-25 rounded-circle border border-white border-5"
                          style={{
                            transform: "translateY(-70px) translateX(20px)",
                          }}
                        />
                      </h2>
                      <h5 className="card-title anton">SN-Team</h5>
                      <p className="card-text fw-semibold">Ed-Tech Company</p>
                      <p className="fs-6">
                        "MarkSoin really helped us creating engaging and
                        effective videos. Their mastery of video editing and
                        ability to capture the attention of our target audience
                        has helped us to increase brand awareness."
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div
        className="behind position-absolute start-0 top-0 z-0 pointerer"
        style={{ transform: "rotate(180deg)" }}
      >
        <img
          src="https://marksoln.in/assets/img/images/h3_project_shape.png"
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HomeSection10;

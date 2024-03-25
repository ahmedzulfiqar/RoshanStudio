import React, { useRef, useState } from "react";

const HomeSection4 = () => {
  return (
    <>
      <div
        className="bg-main border d-flex align-items-center position-relative overflow-hidden"
        style={{ minHeight: "75vh" }}
      >
        <div class="container px-0 ps-lg-0 ps-2">
          <div className="row m-0 justify-content-between">
            <div className="col-lg-6 order-1 col-12 text-start d-md-block d-none align-self-center ps-5">
              <div className="display-3 ms-1 anton text-light text-uppercase pb-lg-4 pb-2 ">
                Producing videos for brands{" "}
                <span className="text-primarys"> worldwide</span>{" "}
              </div>
              <p className="fs-5 text-light ms-1">
                With a worldwide network of creative & production talent, Roshan
                Studio is the perfect video production agency for clients
                operating in the UK, Europe, North America & Asia.
              </p>

              <div className="btn ms-1 btn-lg fs-4 mt-lg-4 btn-primarys text-uppercase text-light anton px-3 py-3 rounded-1">
                Learn More About Us
              </div>
            </div>{" "}
            <div className="col-lg-6 col-12 mt-md-3 py-5 text-start d-md-none d-block">
              <div className="display-4 anton text-light pb-lg-4 pb-3">
                Producing videos for brands{" "}
                <span className="text-primarys"> worldwide</span>{" "}
              </div>
              <p className="fs-6 small text-light">
                With a worldwide network of creative & production talent, Roshan
                Studio is the perfect video production agency for clients
                operating in the UK, Europe, North America & Asia.
              </p>
              <div className="btn btn-lg fs-5 mt-lg-4 mt-2 btn-primarys text-uppercase text-light anton px-3 py-3 rounded-1">
                Learn More About Us
              </div>
            </div>
            <div className="col-lg-6 order-0 col-12 align-self-center my-md-5 mb-4 ">
              <img
                src="https://467997.fs1.hubspotusercontent-na1.net/hub/467997/hubfs/global%20video%20company.webp?width=1000&name=global%20video%20company.webp"
                alt=""
                className="img-fluid rounded-2"
              />
            </div>
          </div>
        </div>{" "}
        <div className="behind position-absolute end-0 top-0 z-2">
          <img
            src="https://marksoln.in/assets/img/images/h3_project_shape.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </>
  );
};

export default HomeSection4;

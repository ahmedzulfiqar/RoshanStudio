import React from "react";

const HomeSection11 = () => {
  return (
    <>
      <div
        className="bg-new border d-flex align-items-center"
        style={{ minHeight: "75vh" }}
      >
        <div class="container px-0 ps-lg-0 ps-2">
          <div className="row m-0 justify-content-between">
            <div className="col-lg-6 col-12 text-start d-md-block d-none align-self-center">
              <div className="display-5 anton text-primarys pb-lg-4 pb-2">
                Boost Your Business: <br />{" "}
                <span className="text-main"> Free Consultation</span>, Awaits!
              </div>
              <p className="fs-5">
                At MarkSoln, we amplify your business using the power of video.
                Imagine transforming your brand with engaging video content that
                captivates your audience and boosts your online presence. Our
                team of experts can help you create videos that will boost your
                sales, or improve your brand awareness. Don't let this
                opportunity slip away - unlock your potential through video
                magic. Claim your consultation now!
              </p>{" "}
              <div className="btn btn-lg fs-4 mt-lg-4 btn-main text-uppercase text-light anton px-3 py-3 rounded-1">
                Got a Project? Lets talk!
              </div>
            </div>{" "}
            <div className="col-lg-6 col-12 mt-md-3 py-5 text-start d-md-none d-block">
              <div className="display-5 anton text-primarys pb-lg-4 pb-3">
                A NEW KIND OF VIDEO PRODUCTION AGENCY
              </div>
              <p className="fs-6 small">
                Make an impact with Roshan Studio the go-to video production
                agency for brands.
              </p>
              <p className="fs-6 small">
                We work with fast growing start ups and enterprise brands around
                the globe who want to win new customers with the power of video
                marketing.
              </p>
              <p className="fs-6 small">
                At Venture, we never settle for average, we want you to shine
                brightly and help you change the world!
              </p>{" "}
              <div className="btn btn-lg fs-5 mt-lg-4 mt-2 btn-main text-uppercase text-light anton px-3 py-3 rounded-1">
                Got a Project? Lets talk!
              </div>
            </div>
            <div className="col-lg-5 col-12 align-self-center my-md-5 mb-4 ">
              <img
                src="https://467997.fs1.hubspotusercontent-na1.net/hub/467997/hubfs/manifesto.webp?width=1000&name=manifesto.webp"
                alt=""
                className="img-fluid rounded-2"
              />
              <div
                className="bg-light d-lg-flex d-none fw-bolder shadow-sm rounded-1 mx-3 overflow-hidden"
                style={{ transform: "translateY(-49px)" }}
              >
                <div className="btn btn-main py-3 px-4 rounded-0">
                  <i class="fa fa-play text-light fs-3" aria-hidden="true"></i>
                </div>
                <div className="ps-3 fs-5 align-self-center ">
                  LEARN MORE ABOUT{" "}
                  <span className="text-main">ROSHAN STUDIO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection11;

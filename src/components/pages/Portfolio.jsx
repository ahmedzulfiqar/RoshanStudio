import React, { useState } from "react";
import portfoliodata from "../../components/data/portfoliodata";
import HomeSection8 from "../../components2/home/HomeSection8";
import HomeSection7 from "../../components2/home/HomeSection7";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(portfoliodata[0]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div
        className="col-12 vh-100 bg-black p-0 m-0 d-flex align-items-center justify-content-center  "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
        }}
      >
        <div className="overlaygradient w-100"></div>
        <div className="container px-0 ps-lg-0 ps-2">
          <div className="row position-relative z-2 m-0">
            <div className="col-md-7 ">
              <div className="text-light anton display-1" style={{}}>
                TAKE A LOOK AT <span className="text-main"> OUR WORK</span>
              </div>
              <p className="text-light py-4 fs-4">
                Roshan Studio is a full-service video production agency that
                helps brands to win new customers with creative content &
                campaigns
              </p>
              <div className="btn btn-lg fs-4 mt-lg-3 btn-main text-uppercase text-light anton px-3 py-3 rounded-1">
                <i
                  class="fa fa-play align-self-center pe-3 fs-3"
                  aria-hidden="true"
                ></i>{" "}
                play ShowReel
              </div>
              <img
                src="https://www.venturevideos.com/hs-fs/hubfs/Untitled%20design%20(39).png?width=1080&height=1080&name=Untitled%20design%20(39).png"
                alt=""
                className="img-fluid position-absolute w-25 arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overlaygradient w-100"></div>
      {/*<div
        className="bg- border d-flex align-items-center  pe-2"
        style={{ minHeight: "" }}
      >
        {" "}
        <div className="container px-0 ps-lg-0 ps-2 py-5">
          <div className="row ">
            <div className="col-12 ">
              <h1 className="anton display-1 text-uppercase">Our Work</h1>
            </div>
          </div>
          <div className="dropdown my-3 d-md-block d-none">
            <p className="text-uppercase fs-4 fw-bold">Filter by Video Type </p>
            <button
              className="btn btn-tranparent dropdown-toggle border-dark px-5 w-25 py-3 text-uppercase font-monospace fs-2"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedCategory.name}
            </button>
            <ul
              className="dropdown-menu px-2 w-25 fs-2"
              aria-labelledby="dropdownMenuButton"
            >
              {portfoliodata.map((category) => (
                <li
                  key={category.path}
                  className="text-uppercase font-monospace"
                >
                  <button
                    className="dropdown-item text-uppercase text-center border"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown my-3 d-md-none d-block">
            <p className="text-uppercase fs-4 fw-bold">Filter by Video Type </p>
            <button
              className="btn btn-tranparent dropdown-toggle border-dark px-3 w-100 py-2 text-uppercase font-monospace fs-2"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedCategory.name}
            </button>
            <ul
              className="dropdown-menu px-2 w-100 fs-2"
              aria-labelledby="dropdownMenuButton"
            >
              {portfoliodata.map((category) => (
                <li
                  key={category.path}
                  className="text-uppercase font-monospace"
                >
                  <button
                    className="dropdown-item text-uppercase text-center border"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 mt-md-5 mb-md-0 mb-5">
            <div className="row m-0 mt-md-5 mt-4">
              {selectedCategory.videos.map((video) => (
                <div key={video.link} className="col-md-4 col-6 px-2 py-2">
                  <div className="card border-0 shadow  overflow-hidden">
                    <img src={video.thumbnail} alt="" className="img-fluid " />
                  </div>
                  <div
                    className="bg-light d-lg-flex w-75  d-none fw-bolder  overflow-hidden"
                    style={{ transform: "translateY(-100%)" }}
                  >
                    <div className="btn btn-main py-3 px-4 rounded-0">
                      <i
                        className="fa fa-play text-light fs-3"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="ps-2 fs-3 align-self-center text-uppercase ">
                      View The <span className="text-main"> Video</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
              </div>*/}
      <HomeSection7 />
    </>
  );
};

export default Portfolio;

import React, { useEffect, useState } from "react";
import { animate, motion, stagger } from "framer-motion";
import img from "../media/img/White R copy.png";
import { Link } from "react-router-dom";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setopen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 300 },
  };
  const staggerMenuItems = stagger(0.15, { startDelay: 0.3 });
  useEffect(() => {
    animate(
      ".items",
      open
        ? { opacity: 1, scale: 1, y: -50 }
        : { opacity: 0, scale: 0.9, Y: 60 },
      {
        duration: 0.5,
        delay: open ? staggerMenuItems : 0,
      }
    );
  }, [open]);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <motion.div
        className={`col-12 position-fixed navbarer z-3 Mazzard  ${
          scrolled ? "bg-new py-md-2 shadow text-dark" : "py-md-3 text-light"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container px-0 ps-lg-0 ps-2">
          <div className="row m-0">
            <div className="col-lg-4  col-12 ">
              <Link className="fs-1  position-relative z-3" to="/home">
                {!scrolled ? (
                  <img src={img} alt="" className="w-25" />
                ) : (
                  <img
                    src={img}
                    alt=""
                    className="w-25"
                    style={{ filter: "invert(100%)" }}
                  />
                )}
              </Link>
            </div>
            <motion.div className="col-8 d-lg-flex d-none justify-content-between align-items-center">
              <div className="d-flex text-start w-100 justify-content-end   text-uppercase text-  anton">
                <div className="fs-3 px-xxl-3 px-1 align-self-center">
                  <Link to="/home">Home</Link>
                </div>
                <div className="fs-3 px-xxl-3 px-1  align-self-center">
                  {" "}
                  <Link to="/portfolio"> Our Work</Link>
                </div>
                <div className="fs-3 px-xxl-3 px-1   align-self-center ">
                  {" "}
                  <Link to="/services">Services</Link>
                </div>
                <Link
                  className="fs-3  px-xxl-3 px-1   align-self-center me-xxl-5"
                  to="/about"
                >
                  About Us
                </Link>
                <Link
                  className="fs-3 py-2 ms-xxl-5 text-light ms-2 btn-main rounded-1 px-4 align-self-center  "
                  to="/contact"
                >
                  Contact Us
                </Link>
              </div>
              {/*  <div className="d-block position-absolute text-start  bottom-0 pb-3 ">
                <div className="fs-1 text-dark text-uppercase">Socials</div>
                <div className="d-flex pt-3 justify-content-start pb-5">
                  <i
                    class="fa-brands text-main fs-3 fa-linkedin-in px-3"
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa-brands text-main fs-3 fa-instagram px-3"
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa-brands text-main fs-3 fa-youtube px-3"
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa-brands text-main fs-3 fa-facebook px-3"
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa-brands text-main fs-3 fa-twitter px-3"
                    aria-hidden="true"
                  ></i>
                </div>
      </div>*/}
            </motion.div>{" "}
            <div
              className="d-md-none d-flex justify-content-end position-fixed overflow-hidden  rounded-2 end-0 z-3 me-lg-5 me-3  align-items-center"
              style={{ top: "1.9vh", width: "max-content" }}
            >
              <div className="btn btn-lg  py-4 px-3 border-0 rounded-0  btn-main text-uppercase text-light d-md-block d-none">
                Get a Quote
              </div>
              <div className="btn btn-lg border-0 rounded-0 mt-2 border-start border-dark border-opacity-10 py-md-4 px-md-4 p-2  btn-main text-uppercase text-light">
                <label class="hamburger align-self-center">
                  <input type="checkbox" checked={open} />
                  <svg viewBox="0 0 32 32" onClick={() => setopen(!open)}>
                    <path
                      class="line line-top-bottom"
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path class="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={open ? "open" : "closed"}
          initial={{ opacity: 0 }}
          variants={variants}
          transition={{ duration: 0.3, delay: 0 }}
          className="fixednavbar bg-white border-0 shadow position-fixed z-0 w-100 top-0 h-100 end-0 p-5 d-lg-none d-flex justify-content-center align-items-center"
        >
          <div
            className="d-block text-center text-uppercase text-dark anton"
            onClick={() => setopen(!open)}
          >
            <div className="fs-1 py-3 items">
              <Link to={"/home"}>Home</Link>
            </div>
            <div className="fs-1 py-3 items">
              {" "}
              <Link className="fs-1 py-3 items" to={"/portfolio"}>
                Our Work
              </Link>
            </div>
            <div className="fs-1 py-3 items">
              {" "}
              <Link className="fs-1 py-3 items" to={"/services"}>
                Services
              </Link>
            </div>
            <div className="fs-1 py-3 items">
              {" "}
              <Link className="fs-1 py-3 items" to={"/about"}>
                About Us
              </Link>
            </div>
            <div className="fs-1 py-2 mt-4 btn-main text-light  rounded-1 px-4 items items2">
              {" "}
              <Link to={"/contact"}>Contact Us</Link>
            </div>
          </div>
          <div className="d-block position-absolute text-center items bottom-0">
            <div className="fs-1 text-dark text-uppercase pb-2">Socials</div>
            <div className="d-flex pt-3 justify-content-start pb-2">
              <a
                href="https://www.linkedin.com/company/roshan-studio101/"
                target="_blank"
              >
                <i
                  className="fa-brands text-main fs-3 fa-linkedin-in px-3"
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/roshanstudio_101/"
                target="_blank"
              >
                <i
                  className="fa-brands text-main fs-3 fa-instagram px-3"
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61554420369299"
                target="_blank"
              >
                <i
                  className="fa-brands text-main fs-3 fa-facebook px-3"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="" target="_blank">
                <i
                  className="fa-brands text-main fs-3 fa-twitter px-3"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Header;

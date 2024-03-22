import React, { useEffect, useState } from "react";
import { animate, motion, stagger } from "framer-motion";
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
      <div
        className={`col-12 position-fixed navbarer z-3 anton  ${
          scrolled ? "bg-new py-3 shadow" : "py-4 text-light"
        }`}
      >
        <div className="container px-0 ps-lg-0 ps-2">
          <div className="row m-0">
            <div className="col-md-6 col-12">
              <div className="fs-1  position-relative z-3">ROSHAN STUDIO</div>
            </div>
            <div
              className="d-md-none d-flex justify-content-end position-fixed overflow-hidden  rounded-2 end-0 z-3 me-lg-5 me-3  align-items-center"
              style={{ top: "1.9vh", width: "max-content" }}
            >
              <div className="btn btn-lg  py-4 px-3 border-0 rounded-0  btn-main text-uppercase text-light d-md-block d-none">
                Get a Quote
              </div>
              <div className="btn btn-lg border-0 rounded-0  border-start border-dark border-opacity-10 py-md-4 px-md-4 p-2  btn-main text-uppercase text-light">
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
            <div
              className=" justify-content-end position-fixed d-md-flex d-none overflow-hidden  rounded-2  end-0 z-3 me-lg-5 me-3  align-items-center"
              style={{ top: ".7vh", width: "max-content" }}
            >
              <div className="btn btn-lg  py-4 px-3 border-0 rounded-0  btn-main text-uppercase text-light d-md-block d-none">
                Get a Quote
              </div>
              <div className="btn btn-lg border-0 rounded-0  border-start border-dark border-opacity-10 py-md-4 px-md-4 p-2  btn-main text-uppercase text-light">
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
          className="fixednavbar bg-new border-0 shadow-lg position-fixed z-0 w-25 top-0 h-100 end-0 p-5 d-lg-flex d-none justify-content-start align-items-center"
        >
          <div className="d-block text-start text-uppercase text-dark  anton">
            <div className="fs-1 py-3 items">Home</div>
            <div className="fs-1 py-3 items">Our Work</div>
            <div className="fs-1 py-3 items">Services</div>
            <div className="fs-1 py-3 items">About Us</div>
            <div className="fs-1 py-2 mt-4 btn-main rounded-1 px-4 items items2">
              Contact Us
            </div>
          </div>
          <div className="d-block position-absolute text-start items bottom-0 pb-3 ">
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
          </div>
        </motion.div>{" "}
        <motion.div
          animate={open ? "open" : "closed"}
          initial={{ opacity: 0 }}
          variants={variants}
          transition={{ duration: 0.3, delay: 0 }}
          className="fixednavbar bg-white border-0 shadow position-fixed z-0 w-100 top-0 h-100 end-0 p-5 d-lg-none d-flex justify-content-center align-items-center"
        >
          <div className="d-block text-center text-uppercase text-dark anton">
            <div className="fs-1 py-3 items">Home</div>
            <div className="fs-1 py-3 items">Our Work</div>
            <div className="fs-1 py-3 items">Services</div>
            <div className="fs-1 py-3 items">About Us</div>
            <div className="fs-1 py-2 mt-4 btn-main rounded-1 px-4 items items2">
              Contact Us
            </div>
          </div>
          <div className="d-block position-absolute text-center items  bottom-0  ">
            <div className="fs-1 text-dark text-uppercase pb-2">Socials</div>
            <div className="d-flex pt-3 justify-content-start pb-2">
              <i
                class="fa-brands text-main fs-3 fa-linkedin-in px-3"
                aria-hidden="true"
              ></i>
              <i
                class="fa-brands text-main fs-3 fa-instagram px-3"
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
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;

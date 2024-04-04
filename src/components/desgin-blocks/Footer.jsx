import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="text-center text-lg-start bg-main text-light ">
        <section class="d-flex justify-content-center justify-content-lg-center p-4 border-bottom">
          <div className="">
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h3 class="text-uppercase  mb-4 anton display-5">
                  ROSHAN STUDIO
                </h3>
                <p>
                  Over the last 18 years we've developed a fully managed end to
                  end video production process that not only delivers amazing
                  results, it also makes us exceptionally easy to work with.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 col-4 mx-auto my-md-4">
                <h6 class="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <Link to="/home" href="#!" class="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/about" href="#!" class="text-reset">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/services" href="#!" class="text-reset">
                    Services
                  </Link>
                </p>
                <p>
                  <Link to="/contact" href="#!" class="text-reset">
                    Contact Us
                  </Link>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 col-4 mx-auto my-md-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/portfolio" href="#!" class="text-reset">
                    PortFolio
                  </Link>
                </p>
                <p>
                  <Link to="/contact" href="#!" class="text-reset">
                    Free Consultation
                  </Link>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3  mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i>Islamabad,Pakistan
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i>123456789
                </p>
                <p>
                  <i class="fas fa-print me-3"></i>123456789
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style={{ backgroundcolor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright
        </div>
      </footer>
    </>
  );
}

export default Footer;

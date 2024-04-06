import React, { useState } from "react";
import HomeSection10 from "../../components2/home/HomeSection10";
import emailjs from "emailjs-com";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
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
              <div
                className="text-light anton   text-uppercase display-1"
                style={{}}
              >
                LET'S <span className="text-main"> TALK</span>
              </div>
              <p className="text-light py-4 fs-4">
                Connecting with us, your gateway to support and solutions. Reach
                out, we're here to listen and assist.
              </p>
              <a href="">
                <div className="btn btn-lg fs-4 mt-lg-3 btn-main text-uppercase text-light anton px-3 py-2 rounded-1">
                  <i
                    class="fa fa-play align-self-center pe-3 fs-3"
                    aria-hidden="true"
                  ></i>{" "}
                  Contact US
                </div>
              </a>
              <img
                src="https://www.venturevideos.com/hs-fs/hubfs/Untitled%20design%20(39).png?width=1080&height=1080&name=Untitled%20design%20(39).png"
                alt=""
                className="img-fluid position-absolute w-25 arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container px-md-0 px-3 ps-lg-0 ps-2 my-5 justify-content-between">
        <div className="row px-4 px-md-0">
          <div className="col-md-4  my-md-3 d-md-block d-none">
            <h5 className="fs-5 anton text-secondary">Hit The Digits</h5>
            <h1 className="display-4 anton texts text-uppercase">
              +1234567890
            </h1>
          </div>
          <div className="col-md-6 my-md-3 d-md-block d-none">
            <h5 className="fs-5 anton text-secondary ">Drop us a line</h5>
            <h1 className="display-4 anton texts text-uppercase">
              RoshanStudion@gmail.com
            </h1>
          </div>
        </div>
        <div className="row my-2 px-2 px-md-0">
          <div className="col-md-4 col-12 my-1 d-md-none d-block">
            <h5 className="fs-5 anton text-secondary">Hit The Digits</h5>
            <h1 className=" anton text-uppercase">+1234567890</h1>
          </div>
          <div className="col-md-6 col-12 my-2 d-md-none d-block">
            <h5 className="fs-5 anton text-secondary ">Drop us a line</h5>
            <h1 className=" anton text-uppercase">RoshanStudion@gmail.com</h1>
          </div>
        </div>
        <div class="container">
          <hr class="my-md-4 mt-md-0 mt-4 text-dark" />
        </div>
        <div className="row mt-md-5 mt-5">
          <div className="col-md-4 px-4 px-md-0">
            <h1 className="display-5 anton  text-uppercase">
              SEND US A MESSAGE
            </h1>
          </div>
          <div className="col-md-8 px-4">
            <form action="">
              <div className="row ">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="w-100 fs-4 rounded d-md-block d-none py-2 px-2 border-2  mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="w-100 fs-5 py-2  rounded px-2 border-2 d-md-none d-block mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="w-100  fs-4 rounded d-md-block d-none py-2 px-2 border-2  mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="w-100  fs-5 py-2  rounded px-2 border-2 d-md-none d-block mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mt-md-4">
                <div className="col-md-6">
                  <input
                    type="email"
                    className="w-100 fs-4 rounded d-md-block d-none py-2 px-2 border-2  mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="email"
                    className="w-100 fs-5 py-2  rounded px-2 border-2 d-md-none d-block mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="w-100 fs-4 rounded d-md-block d-none py-2 px-2 border-2  mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="Phone Number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <input
                    type="number"
                    className="w-100 fs-5 py-2  rounded px-2 border-2 d-md-none d-block mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="Phone Number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-md-4">
                <div className="col-md-12">
                  <textarea
                    type="text"
                    className="w-100 fs-4 rounded d-md-block d-none py-2 px-2 border-2 mb-md-3  mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="Your Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <textarea
                    type="text"
                    className="w-100 fs-5 py-2  rounded px-2 border-2 d-md-none d-block mt-md-0 mt-3 border-secondary text-secondary anton text-place"
                    placeholder="Your Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-lg fs-4 mt-lg-3 bg-main border-3 text-uppercase text-light fw-bold px-4  mt-md-5 mt-4 py-2 rounded-2"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
        <div class="container my-5 ">
          <hr class="pt-1 text-dark" />
        </div>
        {/* <div className="row">
          <div className="col-12">
            <h6 className="text-secondary font-monospace fs-5 anton ">
              Our Locations
            </h6>
            <h1 className="text-dark  display-2 anton text-uppercase">
              Where YOU'LL find us
            </h1>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4 px-md-0 px-4">
            <div class="card border-0 bg-second">
              <img
                src="https://467997.fs1.hubspotusercontent-na1.net/hub/467997/hubfs/Nottingham_Robin_Hood.jpg?width=500&name=Nottingham_Robin_Hood.jpg"
                class="card-img"
                alt="Sample Image"
              />
              <div class="card-body p-4">
                <h5 class="card-title px-md-2 anton fs-1">ISLAMABAD HQ</h5>
                <p class="card-text px-md-2  fs-5">
                  Dryden Enterprise Centre NTU <br /> Dryden Street, Islamabad{" "}
                  <br /> NG1 4FQ <br />
                  Pakistan
                </p>
              </div>
            </div>
          </div>{" "}
      </div>*/}
      </div>{" "}
    </>
  );
};

export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import OpenPopup from "../../components2/portfolio/OpenPopup";
function Videocard({ video }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupVideoUrl, setPopupVideoUrl] = useState("");
  const openPopup = (videoUrl) => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {" "}
      <motion.div
        className="col-lg-6 col-12 px-2 py-2 s"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        onClick={() => openPopup(video.videoUrl)}
      >
        <div className="card border-0 shadow rounded-4 overflow-hidden">
          <img src={video.thumbnail} alt="" className="img-fluid rounded-4" />
        </div>{" "}
        <div
          className="bg-light d-lg-flex w-75 d-none fw-bolder rounded-1 overflow-hidden"
          style={{ transform: "translateY(-100%)" }}
        >
          <div className="btn btn-main py-3 px-4 rounded-0">
            <i className="fa fa-play text-light fs-3" aria-hidden="true"></i>
          </div>
          <div className="ps-3 fs-3 align-self-center text-uppercase ">
            View The
            <span className="text-main"> Video</span>
          </div>
        </div>
      </motion.div>
      {showPopup && (
        <OpenPopup setShowPopup={setShowPopup} popupVideoUrl={video.link} />
      )}
    </>
  );
}

export default Videocard;

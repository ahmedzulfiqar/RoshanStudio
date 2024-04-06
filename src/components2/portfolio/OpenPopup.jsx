import React, { useRef } from "react";
import { motion } from "framer-motion";

const OpenPopup = ({ setShowPopup, popupVideoUrl }) => {
  const popupRef = useRef(null);

  const handleClosePopup = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      viewport={{ once: true }}
      className="video-popup col-12 d-flex justify-content-center align-items-center vw-100 vh-100 p-lg-5 z-3"
      style={{ position: "fixed", top: "0", left: "0" }}
      onClick={handleClosePopup}
    >
      <div
        ref={popupRef}
        className="video-popup-inner p-5 d-none d-md-block"
        style={{ width: "50%", height: "50%" }}
      >
        <button
          className="btn btn-light close-popup position-absolute e"
          onClick={() => setShowPopup(false)}
        >
          X
        </button>
        <iframe
          src={popupVideoUrl}
          title="YouTube video player"
          frameBorder="0"
          className="w-100 h-100"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div
        ref={popupRef}
        className="video-popup-inner  d-block d-md-none"
        style={{ maxWidth: "80%", maxHeight: "80%" }}
      >
        <button
          className="btn btn-light close-popup position-absolute"
          onClick={() => setShowPopup(false)}
        >
          X
        </button>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            src={popupVideoUrl}
            title="YouTube video player"
            className="embed-responsive-item"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default OpenPopup;

import React, { useState } from "react";
import { motion } from "framer-motion";

function Videocard({ video, onClose }) {
  return (
    <motion.div
      className="col-lg-6 col-12 px-2 py-2 s"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {" "}
      <div className="position-fixed top-50 start-50 translate-middle p-3 rounded">
        <button
          className="btn-close bg-white position-absolute top-0 end-0 m-2"
          onClick={onClose}
        ></button>
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="d-md-block d-none mx-auto"
        ></iframe>{" "}
        <iframe
          width="350"
          height="315"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="d-md-none mx-auto"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default Videocard;

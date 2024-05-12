import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import "swiper/css/scrollbar";

const HomeSection10 = () => {
  const data = [
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ef747cd73fa39f737c9cf6390396a91c-1607979618718/09b9db11-caa7-4c7a-827e-2e1c950867d3.jpg",
      name: "jailee7",
      country: "United States",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "This is my guy! I wish I could give 10 stars…his work, personality, and passion are TEN STAR WORTHY! He’s a Top Rated Seller for a reason! Delivered exactly what he promised! I am thrilled at the final result. * Highly Recommended! * Looking forward to our next dealing.",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/cf3dca3141fa18ee23e5c9cbe86b41c8-1618134981697149046477/JPEG_20231012_181725_2676969500723906074.jpg",
      name: "st3v3n3aker",
      country: "United States",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Roshan was absolutely amazing to work with. not only did I have an exceptional service, I made a friend for life! 5 stars! ⭐️⭐️⭐️⭐️⭐️",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/592cd44d43649ad794412cce93dbb436-1711227370253/bff22971-ae39-4932-85aa-bcebf3c6fed6.png",
      name: "rmissouri",
      country: "United States",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Roshan exceeded my expectations and it was a joy to work with him. Looking forward to future projects with him.",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9d117d98c93eb11a024141d29f355478-1594989458383/be0ed4f7-6c63-4989-827c-e0c9ec869baf.png",
      name: "changsam",
      country: "Singapore",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "great work and communication. recommended to anyone that needs a good editor",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/f21661d0ba32cbf02dcec6e8997504cc-1586034276886/662c0456-df57-4978-a6c4-d444f1d27c3e.jpg",
      name: "tunayoney",
      country: "United Kingdom",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Understood the custom template and provided in premier pro as request. Great guy to work with",
    },
    {
      img: "https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=iUEnCiDHHDOzwg&pid=ImgRaw&r=0",
      name: "arc4ca",
      country: "United States",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Working with Roshan was a game-changer for our project. His keen eye for detail, remarkable editing skills, and innovative storytelling brought our vision to life in a way we couldn't have imagined. Professional, punctual, and a pleasure to collaborate with—Roshan is a true artist.",
    },
    {
      img: "https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=iUEnCiDHHDOzwg&pid=ImgRaw&r=0",
      name: "udayanjain",
      country: "India",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "This was quite a difficult task for any editor, but Roshan was very patient with me and has delivered a phenomenal video. Will surely be working with him again.",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/24e67e103e6fa3b93bc189900ccc9207-1696994829855/c69d0391-9ed3-4dc0-ac5e-f5d5296fb3b6.jpg",
      name: "mmontgom",
      country: "Canada",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Roshan did a fanatic video edit. He was very communicative and nailed the video perfectly! Really pleased with the final result.",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8877f5cae0dd6be9e743889b349e6660-1554747943113/33b49eb7-fb15-45d1-b263-074c75ac1bbd.jpg",
      name: "kendrickavant",
      country: "United States",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Roshan immediately earned a place in my business contacts with amazing communication and superior speed. My video was edited quickly, MUCH BETTER THAN EXPECTED, and efficiently. I'm definitely going to return for future services.",
    },
    {
      img: "https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=iUEnCiDHHDOzwg&pid=ImgRaw&r=0",
      name: "miltoninvest",
      country: "Ghana",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Your a PRO, even though my video quality was not up to standard but you’ve exhibited an impressive display of professionalism. I recommend Roshan to everyone looking for an expert for video editing jobs.",
    },
    {
      img: "https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=iUEnCiDHHDOzwg&pid=ImgRaw&r=0",
      name: "baradaaa1980",
      country: "United Arab Emirates",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Roshan is an incredible freelancer! He did an outstanding job editing my video, and I couldn't be happier with the results. His attention to detail and creativity truly shine through in his work. I highly recommend him to anyone in need of top-notch video editing services. Thank you, Roshan.",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/55fbb38618132a4700c45dc463c53135-1685422653102/7cfc0efe-d517-4bf5-9bda-8b0c881c5a37.jpg",
      name: "rachelelizab982",
      country: "Bahamas",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review: "amazing!!!",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/573865005efe68cace71aecd240e6863-1689257635055/51cb30db-3bdc-4991-b31a-713c4c2590d9.png",
      name: "googleman23",
      country: "Japan",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Roshan_101 is simply exceptional! From start to finish, the video-making experience was outstanding. Roshan_101's creativity, professionalism, and responsiveness were top-notch. They skillfully brought my vision to life, exceeding my expectations. Communication was smooth, and they promptly addressed any concerns. Working with Roshan_101 was an absolute pleasure, and I highly recommend their services. I look forward to collaborating again soon!",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b2a1398a519d12c942082963423ff853-1670850328309/d8a78392-0594-4fc6-8547-6c5166d0d5b0.png",
      name: "omdhaf09",
      country: "Switzerland",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review: "The most talented editor I have ever worked with. I enjoy working with this seller because he knows what he is doing. Clear recommendation.",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2184b8b6d2456e921a2ce86a51e471a3-1614211920076/4a2e25da-8283-46fc-85cc-0417f73fd24f.jpg",
      name: "karinadobra",
      country: "Australia",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review: "As always Roshan has delivered some great videos in a timely manner for me! I have been using his services on and off for about 6 months now and I’m not looking any further! 🙏",
    },
    {
      img: "https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=iUEnCiDHHDOzwg&pid=ImgRaw&r=0",
      name: "maaz17khan",
      country: "United Arab Emirates",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review: "Top G! If you give him the right clue he can really give you that special touch of his! Also communication is smooth and he is prompt in his deliveries. Great work! Also he puts efforts in revisions if any",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d3c23cd2a4a6d4c7866021d175ab379c-1395742781682315452.13623/F73E8BE0-F568-4BAE-A07E-F6186970CF18",
      name: "aitasulser",
      country: "Switzerland",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      review: "Communication with Roshan was quick and easy, he completed the tasks before agreed delivery date and to full satisfaction. Looking forward to work with Roshan in the near future again and would definitely recommend him.",
    },
  ];
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength).trim() + '...';
  };
  return (
    <motion.div
      className="bg-main border d-flex align-items-center position-relative ps-2"
      style={{ minHeight: "75vh" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="container px-0 ps-lg-0 ps-2 py-5"
      >
        <div className="row m-0 justify-content-between">
          <div className="col-md-8 col-12 text-start d-md-block d-none align-self-center ps-md-0 Mazzard">
            <p className="fs-2 text-uppercase fw-bolder text-light">
              Testimonials
            </p>
            <div className="display-3 anton text-dark text-uppercase pb-lg-2 pb-2">
              CUSTOMER REVIEWS
            </div>
            <div className="display-5 fw-bolder text-light pb-lg-2 pb-2">
              Why They Choose Us
            </div>
          </div>
          <div className="col-md-8 col-12 text-start d-md-none d-block align-self-center ps-md-0">
            <p className="fs-1 fw-semibold  text-light">Testimonials</p>
            <div className="display-2 anton small text-dark text-uppercase pb-lg-2 pb-2">
              CUSTOMER REVIEWS
            </div>
            <div className="display-5 small fw-bolder text-light pb-lg-2 pb-2">
              Why They Choose Us
            </div>
          </div>
        </div>

        <div className="row m-0 me-4 justify-content-start ">
          <div className="col-md-12 col-12 py-md-3">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              slidesPerView={1}
              className="sliderr"
              spaceBetween={50}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                  spaceBetween: 70,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 70,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 70,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="card ps-0 mt-5 mt-md-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ height: "350px" }}
                  >
                    <div className="card-body px-4 ">
                      <h2 className="text-center d-md-block ">
                        <img
                          src={item.img}
                          alt=""
                          className="img-fluid position-absolute start-0 w-25 rounded-circle border border-white border-5"
                          style={{
                            transform: "translateY(-70px) translateX(20px)",
                          }}
                        />
                      </h2>
                      <h5 className="card-title fw-bold  ">
                        {item.name}
                      </h5>
                      <p className="fw-semibold text-warning">
                        <span className="d-flex">{item.stars}</span>
                      </p>
                      <p className="card-text jakarta fw-semibold">
                        {item.country}
                      </p>
                      <p className="fs-6 jakarta">{truncateText(item.review, 220)}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="behind position-absolute start-0 top-0 z-0 pointerer"
        style={{ transform: "rotate(180deg)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img
          src="https://marksoln.in/assets/img/images/h3_project_shape.png"
          alt=""
          className="img-fluid"
        />
      </motion.div>
    </motion.div>
  );
};

export default HomeSection10;

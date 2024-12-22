// // "use client";

// // import advantage from "@data/sections/partner.json";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper";
// // import "swiper/css";
// // import "swiper/css/autoplay";
// // import Data from "@data/sliders/devops";

// // const DevopsSlider = ({ bgStyle }) => {
// //   return (
// //     <>
// //       {/* Partners Section */}
// //       <div className={`mil-${bgStyle}-bg mil-partners mil-relative`} style={{marginTop:"-90px",backgroundColor:"#F8F8F8"}}>
// //         <div className="container mil-p-60">
// //           <div className="mil-background-grid mil-softened" />
// //           <div className="row">
// //             <div className="col-12">
// //               <div className="mil-center mil-mb-60">
// //                 {/* <span
// //                   className="mil-suptitle mil-upper mil-up mil-mb-30"
// //                   dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
// //                 />
// //                 <h2
// //                   className="mil-upper mil-up mil-mb-30"
// //                   dangerouslySetInnerHTML={{ __html: advantage.title }}
// //                 /> */}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="container mil-p-60" style={{marginTop:"-90px"}}>
// //           <Swiper
// //             modules={[Autoplay]}
// //             loop={true}
// //             autoplay={{
// //               delay: 1,
// //               disableOnInteraction: false,
// //             }}
// //             speed={3000}
// //             slidesPerView={4}
// //             spaceBetween={30}
// //             breakpoints={{
// //               320: {
// //                 slidesPerView: 1,
// //                 spaceBetween: 10,
// //               },
// //               480: {
// //                 slidesPerView: 2,
// //                 spaceBetween: 20,
// //               },
// //               768: {
// //                 slidesPerView: 3,
// //                 spaceBetween: 30,
// //               },
// //               1024: {
// //                 slidesPerView: 4,
// //                 spaceBetween: 40,
// //               },
// //               1440: {
// //                 slidesPerView: 5,
// //                 spaceBetween: 50,
// //               },
// //             }}
// //             className="swiper-container mil-infinite-show mil-up"
// //           >
// //             {Data.items.map((item, key) => (
// //               <SwiperSlide
// //                 className="swiper-slide"
// //                 key={`partners-slider-item-${key}`}
// //               >
// //                 <a
// //                   href={item.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="mil-partner-frame"
// //                 >
// //                   <img src={item.image} alt={item.alt} className="mil-partner-img" />
// //                 </a>
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>
// //       </div>

// //       {/* Inline CSS */}
// //       <style jsx>{`
// //         .mil-partners {
// //           padding: 60px 0;
// //         }

// //         .mil-partner-frame {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           height: 100px; /* Fixed height for consistency */
// //         }

// //         .mil-partner-img {
// //           max-width: 100%;
// //           max-height: 100px; /* Adjust to maintain aspect ratio */
// //           object-fit: contain;
// //         }

// //         @media (max-width: 768px) {
// //           .mil-partners {
// //             padding: 30px 0;
// //           }

// //           .mil-partner-frame {
// //             height: 80px; /* Smaller height on mobile */
// //           }
// //         }

// //         @media (min-width: 1440px) {
// //           .mil-partner-frame {
// //             height: 120px; /* Larger height for fullscreen */
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default DevopsSlider;


// "use client";

// import advantage from "@data/sections/partner.json";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/autoplay";
// import Data from "@data/sliders/devops";

// const DevopsSlider = ({ bgStyle }) => {
//   return (
//     <>
//       {/* Partners Section */}
//       <div
//         className={`mil-${bgStyle}-bg mil-partners mil-relative`}
//         style={{ marginTop: "-90px", backgroundColor: "#F8F8F8" }}
//       >
//         <div className="container mil-p-60">
//           <div className="mil-background-grid mil-softened" />
//           <div className="row">
//             <div className="col-12">
//               <div className="mil-center mil-mb-60">
//                 {/* <span
//                   className="mil-suptitle mil-upper mil-up mil-mb-30"
//                   dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
//                 />
//                 <h2
//                   className="mil-upper mil-up mil-mb-30"
//                   dangerouslySetInnerHTML={{ __html: advantage.title }}
//                 /> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container mil-p-60" style={{ marginTop: "-90px" }}>
//           <Swiper
//             modules={[Autoplay]}
//             loop={true}
//             autoplay={{
//               delay: 1, // Very short delay for smooth continuous scrolling
//               disableOnInteraction: false, // Continue autoplay after interaction
//               pauseOnMouseEnter: false, // Prevent pause on hover
//             }}
//             speed={3000} // Adjust the speed of the scroll
//             slidesPerView={4}
//             spaceBetween={30}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//               },
//               480: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//               },
//               1024: {
//                 slidesPerView: 4,
//                 spaceBetween: 40,
//               },
//               1440: {
//                 slidesPerView: 5,
//                 spaceBetween: 50,
//               },
//             }}
//             className="swiper-container mil-infinite-show mil-up"
//           >
//             {Data.items.map((item, key) => (
//               <SwiperSlide
//                 className="swiper-slide"
//                 key={`partners-slider-item-${key}`}
//               >
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mil-partner-frame"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.alt}
//                     className="mil-partner-img"
//                   />
//                 </a>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Inline CSS */}
//       <style jsx>{`
//         .swiper-container {
//           direction: rtl; /* Change direction of scrolling to right-to-left */
//         }

//         .mil-partners {
//           padding: 60px 0;
//           overflow: hidden; /* Prevent overflow for a clean appearance */
//         }

//         .mil-partner-frame {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100px; /* Fixed height for consistency */
//         }

//         .mil-partner-img {
//           max-width: 100%;
//           max-height: 100px; /* Maintain aspect ratio */
//           object-fit: contain;
//         }

//         @media (max-width: 768px) {
//           .mil-partners {
//             padding: 30px 0;
//           }

//           .mil-partner-frame {
//             height: 80px; /* Smaller height on mobile */
//           }
//         }

//         @media (min-width: 1440px) {
//           .mil-partner-frame {
//             height: 120px; /* Larger height for fullscreen */
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default DevopsSlider;


// "use client";

// import advantage from "@data/sections/devops.json";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/autoplay";
// import Data from "@data/sliders/devops";

// const DevopsSlider = ({ bgStyle }) => {
//   return (
//     <>
//       {/* Partners Section */}
//       <div
//         className={`mil-${bgStyle}-bg mil-partners mil-relative`}
//         style={{ marginTop: "-80px", backgroundColor: "#F8F8F8" }}
//       >
//         <div className="container mil-p-60">
//           <div className="mil-background-grid mil-softened" />
//           <div className="row">
//             <div className="col-12">
//               <div className="mil-center mil-mb-60" style={{marginTop:"-40px"}}>
//                 {/* <span
//                   className="mil-suptitle mil-upper mil-up mil-mb-30"
//                   dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
//                 /> */}
//                 <h2
//                   className="mil-upper mil-up mil-mb-30"
//                   dangerouslySetInnerHTML={{ __html: advantage.title }}
//                   style={{color:"#17283E"}}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container mil-p-60" style={{ marginTop: "-60px" }}>
//           <Swiper
//             modules={[Autoplay]}
//             loop={true}
//             autoplay={{
//               delay: 1, // Very short delay for smooth continuous scrolling
//               disableOnInteraction: false, // Continue autoplay after interaction
//               reverseDirection: true, // Reverse direction for autoplay
//             }}
//             speed={3000} // Adjust the speed of the scroll
//             slidesPerView={4}
//             spaceBetween={30}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//               },
//               480: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//               },
//               1024: {
//                 slidesPerView: 4,
//                 spaceBetween: 40,
//               },
//               1440: {
//                 slidesPerView: 5,
//                 spaceBetween: 50,
//               },
//             }}
//             className="swiper-container mil-infinite-show mil-up"
//           >
//             {Data.items.map((item, key) => (
//               <SwiperSlide
//                 className="swiper-slide"
//                 key={`partners-slider-item-${key}`}
//               >
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mil-partner-frame"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.alt}
//                     className="mil-partner-img"
//                   />
//                 </a>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Inline CSS */}
//       <style jsx>{`
//         .swiper-container {
//           direction: ltr; /* Change direction to left-to-right */
//         }

//         .mil-partners {
//           padding: 60px 0;
//           overflow: hidden; /* Prevent overflow for a clean appearance */
//         }

//         .mil-partner-frame {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100px; /* Fixed height for consistency */
//         }

//         .mil-partner-img {
//           max-width: 100%;
//           max-height: 100px; /* Maintain aspect ratio */
//           object-fit: contain;
//         }

//         @media (max-width: 768px) {
//           .mil-partners {
//             padding: 30px 0;
//           }

//           .mil-partner-frame {
//             height: 80px; /* Smaller height on mobile */
//           }
//         }

//         @media (min-width: 1440px) {
//           .mil-partner-frame {
//             height: 120px; /* Larger height for fullscreen */
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default DevopsSlider;



"use client";

import advantage from "@data/sections/devops.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Data from "@data/sliders/devops";

const DevopsSlider = ({ bgStyle }) => {
  return (
    <>
      {/* Partners Section */}
      <div
        className={`mil-${bgStyle}-bg mil-partners mil-relative`}
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <div className="container mil-p-60">
          <div className="mil-background-grid mil-softened" />
          <div className="row">
            <div className="col-12">
              <div className="mil-center mil-mb-60">
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: advantage.title }}
                  style={{ color: "#17283E" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mil-p-60" style={{ marginTop: "-60px" }}>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1, // Very short delay for smooth continuous scrolling
              disableOnInteraction: false, // Continue autoplay after interaction
              reverseDirection: true, // Reverse direction for autoplay
            }}
            speed={3000} // Adjust the speed of the scroll
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="swiper-container mil-infinite-show mil-up"
          >
            {Data.items.map((item, key) => (
              <SwiperSlide
                className="swiper-slide"
                key={`partners-slider-item-${key}`}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mil-partner-frame"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="mil-partner-img"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Inline CSS for responsiveness */}
      <style jsx>{`
        .swiper-container {
          direction: ltr; /* Change direction to left-to-right */
        }

        .mil-partners {
          padding: 60px 0;
          overflow: hidden; /* Prevent overflow for a clean appearance */
        }

        .mil-partner-frame {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px; /* Fixed height for consistency */
        }

        .mil-partner-img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* Responsive styles for Heading */
        h2 {
          font-size: 40px; /* Default font size for large screens */
          margin-bottom: 30px; /* Default margin */
        }

        /* Responsive Heading Adjustments */
        @media (max-width: 768px) {
          .mil-partners {
            padding: 30px 0;
          }

          h2 {
            font-size: 28px; /* Smaller font size on mobile */
            margin-bottom: 20px; /* Adjust margin for mobile */
          }

          .mil-partner-frame {
            height: auto; /* Adjust to content height on mobile */
          }

          .mil-partner-img {
            max-height: 80px;
          }

          /* Ensure the header stays within view on mobile */
          .mil-center {
            margin-top: 0; /* Remove negative margin on mobile */
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .mil-partner-frame {
            height: auto; /* Adjust height for tablets */
          }

          .mil-partner-img {
            max-height: 90px;
          }

          h2 {
            font-size: 32px; /* Font size adjustment for tablets */
            margin-bottom: 25px; /* Adjust margin for tablets */
          }
        }

        @media (min-width: 1024px) {
          .mil-partner-frame {
            height: 100px; /* Larger height for desktops */
          }

          .mil-partner-img {
            max-height: 100px;
          }

          h2 {
            font-size: 40px; /* Default font size for larger screens */
            margin-bottom: 30px; /* Adjust margin for large screens */
          }
        }

        @media (min-width: 1440px) {
          .mil-partner-frame {
            height: 120px; /* Larger height for full-screen displays */
          }

          .mil-partner-img {
            max-height: 120px;
          }

          h2 {
            font-size: 45px; /* Larger font size for very large screens */
            margin-bottom: 35px; /* Adjust margin for larger screens */
          }
        }
      `}</style>
    </>
  );
};

export default DevopsSlider;

// import Data from "@data/sections/ideas.json";
// import Link from "next/link";

// const IdeasSection = () => {

//     const styles = {
//         container: {
//           display: 'flex',
//           width: '100%',
//           maxWidth: '1200px',
//           margin: '50px auto',
//           backgroundColor: '#fff',
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//           borderRadius: '10px',
//           overflow: 'hidden',
//         },
//         leftSection: {
//           flex: 1,
//           padding: '50px',
//           backgroundColor: '#fff',
//         },
//         title: {
//           fontSize: '36px',
//           color: '#222',
//           marginBottom: '20px',
//         },
//         description: {
//           fontSize: '18px',
//           color: '#555',
//           lineHeight: '1.6',
//           marginBottom: '30px',
//         },
//         learnMore: {
//           color: '#ff5722',
//           fontWeight: 'bold',
//           textDecoration: 'none',
//           fontSize: '16px',
//           cursor: 'pointer',
//         },
//         rightSection: {
//           flex: 1,
//           display: 'flex',
//           flexWrap: 'wrap',
//           backgroundColor: '#f9f9f9',
//           padding: '50px 20px',
//         },
//         stat: {
//           width: '50%',
//           padding: '20px',
//           boxSizing: 'border-box',
//           textAlign: 'center',
//         },
//         statNumber: {
//           fontSize: '48px',
//           color: '#222',
//           marginBottom: '10px',
//         },
//         statText: {
//           fontSize: '16px',
//           color: '#555',
//         },
//       };
//     return (
//         <>
//             {/* ideas */}
//             {/* <section  style={{background:"#F8F8F8"}}> */}
//             <section>

//                 {/* <div className="container mil-p-0-90">
//                     <div className="mil-background-grid mil-softened" />

//                     <div className="row justify-content-between">
//                         <div className="col-lg-6 d-flex flex-column justify-content-center">

//                             <div>
//                                 <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
//                                 <h2 className="mil-upper mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.title}} />
//                                 <Link href={Data.button.link} className="mil-link mil-upper mil-up">
//                                     {Data.button.label}
//                                     <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
//                                 </Link>
//                             </div>

//                         </div>
//                         <div className="col-lg-5 mil-mt-suptitle-offset">

//                             <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />

//                             <div className="row">
//                                 {Data.items.map((item, key) => (
//                                 <div className="col-sm-4" key={`ideas-item-${key}`}>

//                                     <Link href={item.link} className="mil-icon-box mil-sm-center mil-mb-30">
//                                         <div className="mil-icon mil-icon-accent-bg mil-up mil-mb-30">
//                                             <img src={item.icon} alt="icon" />
//                                         </div>
//                                         <h6 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : item.label}} />
//                                     </Link>

//                                 </div>
//                                 ))}
//                             </div>

//                         </div>
//                     </div>
//                 </div> */}

// <div style={styles.container}>
//       <div style={styles.leftSection}>
//         <h2 style={styles.title}>Translating technology into a positive impact</h2>
//         <p style={styles.description}>
//           Our approach allows us to deliver exceptional experiences that drive growth and success for all stakeholders.
//           Let’s rise to new heights with the power of digital transformation.
//         </p>
//         <a href="#" style={styles.learnMore}>LEARN MORE →</a>
//       </div>
//       <div style={styles.rightSection}>
//         <div style={styles.stat}>
//           <h3 style={styles.statNumber}>10+</h3>
//           <p style={styles.statText}>Years of continual excellence</p>
//         </div>
//         <div style={styles.stat}>
//           <h3 style={styles.statNumber}>7000+</h3>
//           <p style={styles.statText}>Change makers driving revolution</p>
//         </div>
//         <div style={styles.stat}>
//           <h3 style={styles.statNumber}>5+</h3>
//           <p style={styles.statText}>Countries with our presence and clientele</p>
//         </div>
//         <div style={styles.stat}>
//           <h3 style={styles.statNumber}>618+</h3>
//           <p style={styles.statText}>Active clients across the globe</p>
//         </div>
//       </div>
//     </div>
//             </section>
//             {/* ideas end */}
//         </>
//     );
// };
// export default IdeasSection;







// import Data from "@data/sections/ideas.json";
// import Link from "next/link";

// const IdeasSection = () => {
//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'row', // Horizontal layout by default
//       flexWrap: 'wrap', // Wrap elements on smaller screens
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '50px auto',
//       backgroundColor: '#fff',
//       boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//       borderRadius: '10px',
//       overflow: 'hidden',
//     },
//     leftSection: {
//       flex: 1,
//       padding: '50px',
//       backgroundColor: '#fff',
//       boxSizing: 'border-box',
//     },
//     title: {
//       fontSize: '36px',
//       color: '#222',
//       marginBottom: '20px',
//     },
//     description: {
//       fontSize: '18px',
//       color: '#555',
//       lineHeight: '1.6',
//       marginBottom: '30px',
//     },
//     learnMore: {
//       color: '#ff5722',
//       fontWeight: 'bold',
//       textDecoration: 'none',
//       fontSize: '16px',
//       cursor: 'pointer',
//     },
//     rightSection: {
//       flex: 1,
//       display: 'flex',
//       flexWrap: 'wrap',
//       backgroundColor: '#f9f9f9',
//       padding: '50px 20px',
//       boxSizing: 'border-box',
//     },
//     stat: {
//       width: '50%',
//       padding: '20px',
//       textAlign: 'center',
//       boxSizing: 'border-box',
//     },
//     statNumber: {
//       fontSize: '48px',
//       color: '#222',
//       marginBottom: '10px',
//     },
//     statText: {
//       fontSize: '16px',
//       color: '#555',
//     },

//     // Responsive Media Queries
//     '@media (max-width: 768px)': {
//       container: {
//         flexDirection: 'column',
//         margin: '20px auto', // Reduced margin on smaller screens
//       },
//       leftSection: {
//         padding: '20px', // Less padding on mobile
//       },
//       rightSection: {
//         padding: '20px', // Less padding on mobile
//       },
//       title: {
//         fontSize: '28px', // Smaller title font on mobile
//       },
//       description: {
//         fontSize: '16px', // Smaller description font on mobile
//       },
//       learnMore: {
//         fontSize: '14px', // Adjust font size for smaller screens
//       },
//       stat: {
//         width: '100%', // Stack stats vertically on mobile
//         padding: '15px',
//       },
//       statNumber: {
//         fontSize: '40px', // Smaller stat number on mobile
//       },
//       statText: {
//         fontSize: '14px', // Smaller text for stats
//       },
//     },

//     '@media (max-width: 480px)': {
//       container: {
//         margin: '10px', // Even smaller margins on very small screens
//       },
//       leftSection: {
//         padding: '15px', // Further reduce padding on very small screens
//       },
//       title: {
//         fontSize: '24px', // Even smaller title font
//       },
//       description: {
//         fontSize: '14px', // Even smaller description font
//       },
//       learnMore: {
//         fontSize: '12px', // Adjust font size for very small screens
//       },
//       statNumber: {
//         fontSize: '36px', // Even smaller stat number on very small screens
//       },
//       statText: {
//         fontSize: '12px', // Smaller text for very small screens
//       },
//     },
//   };

//   return (
//     <>
//       <section>
//         <div style={styles.container}>
//           <div style={styles.leftSection}>
//             <h2 style={styles.title}>Translating technology into a positive impact</h2>
//             <p style={styles.description}>
//               Our approach allows us to deliver exceptional experiences that drive growth and success for all stakeholders.
//               Let’s rise to new heights with the power of digital transformation.
//             </p>
//             <a href="#" style={styles.learnMore}>LEARN MORE →</a>
//           </div>
//           <div style={styles.rightSection}>
//             <div style={styles.stat}>
//               <h3 style={styles.statNumber}>10+</h3>
//               <p style={styles.statText}>Years of continual excellence</p>
//             </div>
//             <div style={styles.stat}>
//               <h3 style={styles.statNumber}>7000+</h3>
//               <p style={styles.statText}>Change makers driving revolution</p>
//             </div>
//             <div style={styles.stat}>
//               <h3 style={styles.statNumber}>5+</h3>
//               <p style={styles.statText}>Countries with our presence and clientele</p>
//             </div>
//             <div style={styles.stat}>
//               <h3 style={styles.statNumber}>618+</h3>
//               <p style={styles.statText}>Active clients across the globe</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default IdeasSection;






// 'use client'; // Client-side component

// import { useEffect, useRef, useState } from "react";

// const IdeasSection = () => {
//   const sliderRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const reviews = [
//     {
//       name: "John Doe",
//       image: "/client1.jpg", // Replace with your actual image path
//       review:
//         "VConn has been instrumental in scaling our business. Their hosting services are reliable, and the support team is fantastic!",
//     },
//     {
//       name: "Jane Smith",
//       image: "/client2.jpg", // Replace with your actual image path
//       review:
//         "I highly recommend VConn. They deliver exceptional service with top-notch infrastructure!",
//     },
//     {
//       name: "Mark Wilson",
//       image: "/client3.jpg", // Replace with your actual image path
//       review:
//         "The level of professionalism and attention to detail is unmatched. A great experience working with VConn.",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [reviews.length]);

//   const updateSlider = () => {
//     if (sliderRef.current) {
//       sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }
//   };

//   useEffect(() => {
//     updateSlider();
//   }, [currentIndex]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//   };

//   return (
//     <section id="client-reviews" style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.title}>What Our Clients Say</h2>
//         <div style={styles.slider}>
//           <div
//             ref={sliderRef}
//             style={{
//               ...styles.sliderContainer,
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {reviews.map((review, index) => (
//               <div key={index} style={styles.slide}>
//                 <div style={styles.reviewCard}>
//                   <img
//                     src={review.image}
//                     alt={review.name}
//                     style={styles.image}
//                   />
//                   <h3 style={styles.clientName}>{review.name}</h3>
//                   <p style={styles.clientReview}>{review.review}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button style={styles.prevButton} onClick={handlePrev}>
//             &lt;
//           </button>
//           <button style={styles.nextButton} onClick={handleNext}>
//             &gt;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: "80px 0",
//     backgroundColor: "#1c1c3c",
//   },
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     textAlign: "center",
//   },
//   title: {
//     fontSize: "2rem",
//     fontWeight: "bold",
//     color: "#bcff00",
//     marginBottom: "40px",
//   },
//   slider: {
//     position: "relative",
//     overflow: "hidden",
//   },
//   sliderContainer: {
//     display: "flex",
//     transition: "transform 0.7s ease-in-out",
//   },
//   slide: {
//     flexShrink: 0,
//     width: "100%",
//     padding: "0 15px",
//   },
//   reviewCard: {
//     backgroundColor: "#1c1c3c",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     borderRadius: "8px",
//     padding: "24px",
//     maxWidth: "600px",
//     margin: "0 auto",
//     border: "2px solid #bcff00",
//   },
//   image: {
//     width: "64px",
//     height: "64px",
//     borderRadius: "50%",
//     margin: "0 auto 16px",
//     border: "2px solid #bcff00",
//   },
//   clientName: {
//     fontSize: "1.125rem",
//     fontWeight: "600",
//     color: "#bcff00",
//     marginBottom: "12px",
//   },
//   clientReview: {
//     color: "#d1d5db",
//     fontSize: "1rem",
//   },
//   prevButton: {
//     position: "absolute",
//     top: "50%",
//     left: "10px",
//     transform: "translateY(-50%)",
//     backgroundColor: "#bcff00",
//     color: "#1c1c3c",
//     width: "40px",
//     height: "40px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: "50%",
//     cursor: "pointer",
//     border: "none",
//     transition: "background 0.3s",
//   },
//   nextButton: {
//     position: "absolute",
//     top: "50%",
//     right: "10px",
//     transform: "translateY(-50%)",
//     backgroundColor: "#bcff00",
//     color: "#1c1c3c",
//     width: "40px",
//     height: "40px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: "50%",
//     cursor: "pointer",
//     border: "none",
//     transition: "background 0.3s",
//   },
// };

// export default IdeasSection;





'use client'; // Client-side component

import { useEffect, useRef, useState } from "react";

const IdeasSection = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "John Doe",
      image: "/client1.jpg", // Replace with your actual image path
      review:
        "VConn has been instrumental in scaling our business. Their hosting services are reliable, and the support team is fantastic!",
    },
    {
      name: "Jane Smith",
      image: "/client2.jpg", // Replace with your actual image path
      review:
        "I highly recommend VConn. They deliver exceptional service with top-notch infrastructure!",
    },
    {
      name: "Mark Wilson",
      image: "/client3.jpg", // Replace with your actual image path
      review:
        "The level of professionalism and attention to detail is unmatched. A great experience working with VConn.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const updateSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  useEffect(() => {
    updateSlider();
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <section id="client-reviews" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>What Our Clients Say</h2>
        <div style={styles.slider}>
          <div
            ref={sliderRef}
            style={{
              ...styles.sliderContainer,
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} style={styles.slide}>
                <div style={styles.reviewCard}>
                  <div style={styles.logoBox}>
                    <img
                      src={review.image}
                      alt={review.name}
                      style={styles.image}
                    />
                  </div>
                  <h3 style={styles.clientName}>{review.name}</h3>
                  <p style={styles.clientReview}>{review.review}</p>
                </div>
              </div>
            ))}
          </div>
          <button style={styles.prevButton} onClick={handlePrev}>
            &lt;
          </button>
          <button style={styles.nextButton} onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 0",
    backgroundColor: "#1c1c3c",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#bcff00",
    marginBottom: "80px", // Increased space to prevent overlap
  },
  slider: {
    position: "relative",
    overflow: "hidden",
  },
  sliderContainer: {
    display: "flex",
    transition: "transform 0.7s ease-in-out",
  },
  slide: {
    flexShrink: 0,
    width: "100%",
    padding: "0 15px",
  },
  reviewCard: {
    backgroundColor: "#1c1c3c",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "24px",
    maxWidth: "600px",
    margin: "0 auto",
    border: "2px solid #bcff00",
    position: "relative", // Positions logo box above
    textAlign: "center",
    marginTop: "60px", // Moves the card down to accommodate the logo box
  },
  logoBox: {
    width: "120px",
    height: "120px",
    backgroundColor: "#0c0c30",
    border: "3px solid #bcff00",
    borderRadius: "12px",
    position: "absolute",
    top: "-60px", // Positions the logo box above the card
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: "80%",
    maxHeight: "80%",
    objectFit: "contain",
  },
  clientName: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "#bcff00",
    marginTop: "80px", // Added margin to adjust for the logo box
    marginBottom: "12px",
  },
  clientReview: {
    color: "#d1d5db",
    fontSize: "1rem",
  },
  prevButton: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    backgroundColor: "#bcff00",
    color: "#1c1c3c",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
    border: "none",
    transition: "background 0.3s",
  },
  nextButton: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    backgroundColor: "#bcff00",
    color: "#1c1c3c",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
    border: "none",
    transition: "background 0.3s",
  },
};

export default IdeasSection;








// "use client"; // Add this at the top to mark the component as a Client Component

// import Data from "@data/sections/ideas.json";
// import Link from "next/link";

// const IdeasSection = () => {
//     return (
//         <section
//             style={{
//                 background: "#000000", // Black background
//                 padding: "50px 0", // Add padding to the section
//             }}
//         >
//             <div className="container mil-p-0-90">
//                 <div className="row justify-content-between align-items-center">
//                     {/* Left Content Section */}
//                     <div className="col-lg-6 d-flex flex-column justify-content-center">
//                         <div>
//                             <span
//                                 className="mil-suptitle mil-upper mil-up mil-mb-30"
//                                 style={{
//                                     color: "#ffffff", // White for subtitle
//                                     fontSize: "1.2rem",
//                                     letterSpacing: "1px",
//                                 }}
//                                 dangerouslySetInnerHTML={{
//                                     __html: Data.subtitle,
//                                 }}
//                             />
//                             <h2
//                                 className="mil-upper mil-up mil-mb-40"
//                                 style={{
//                                     color: "#ffffff", // White for title
//                                     fontWeight: "bold",
//                                     fontSize: "2.5rem",
//                                     lineHeight: "1.3",
//                                 }}
//                                 dangerouslySetInnerHTML={{
//                                     __html: Data.title,
//                                 }}
//                             />
//                             <Link
//                                 href={Data.button.link}
//                                 className="mil-link mil-upper mil-up"
//                                 style={{
//                                     display: "inline-block",
//                                     padding: "10px 20px",
//                                     background: "#bcff00", // Green button
//                                     color: "#000000", // Black text on green button
//                                     fontWeight: "bold",
//                                     textTransform: "uppercase",
//                                     borderRadius: "30px",
//                                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//                                     transition: "all 0.3s ease-in-out",
//                                 }}
//                                 onMouseOver={(e) =>
//                                     (e.target.style.background = "#000000") || (e.target.style.color = "#bcff00")
//                                 }
//                                 onMouseOut={(e) =>
//                                     (e.target.style.background = "#bcff00") || (e.target.style.color = "#000000")
//                                 }
//                             >
//                                 {Data.button.label}
//                                 <span className="mil-arrow">
//                                     <img
//                                         src="img/icons/1.svg"
//                                         alt="arrow"
//                                         style={{
//                                             marginLeft: "10px",
//                                             height: "15px",
//                                         }}
//                                     />
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Right Content Section */}
//                     <div className="col-lg-5 mil-mt-suptitle-offset">
//                         <p
//                             className="mil-up mil-mb-60"
//                             style={{
//                                 color: "#f1f1f1", // Light grey for description text
//                                 fontSize: "1rem",
//                                 lineHeight: "1.8",
//                             }}
//                             dangerouslySetInnerHTML={{
//                                 __html: Data.description,
//                             }}
//                         />

//                         {/* Icon Items Section */}
//                         <div className="row">
//                             {Data.items.map((item, key) => (
//                                 <div
//                                     className="col-sm-4 text-center"
//                                     key={`ideas-item-${key}`}
//                                     style={{
//                                         marginBottom: "20px",
//                                     }}
//                                 >
//                                     <Link
//                                         href={item.link}
//                                         className="mil-icon-box"
//                                         style={{
//                                             textDecoration: "none",
//                                             transition: "all 0.3s ease",
//                                         }}
//                                         onMouseOver={(e) => {
//                                             e.currentTarget.style.transform = "scale(1.1)";
//                                         }}
//                                         onMouseOut={(e) => {
//                                             e.currentTarget.style.transform = "scale(1)";
//                                         }}
//                                     >
//                                         <div
//                                             className="mil-icon mil-icon-accent-bg mil-up mil-mb-30"
//                                             style={{
//                                                 width: "80px",
//                                                 height: "80px",
//                                                 margin: "0 auto",
//                                                 borderRadius: "50%",
//                                                 background: "#bcff00", // Green background for icons
//                                                 display: "flex",
//                                                 justifyContent: "center",
//                                                 alignItems: "center",
//                                                 boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
//                                             }}
//                                         >
//                                             <img
//                                                 src={item.icon}
//                                                 alt="icon"
//                                                 style={{
//                                                     width: "40px",
//                                                     height: "40px",
//                                                 }}
//                                             />
//                                         </div>
//                                         <h6
//                                             className="mil-upper mil-up"
//                                             style={{
//                                                 color: "#ffffff", // White for icon labels
//                                                 fontWeight: "bold",
//                                                 fontSize: "1rem",
//                                             }}
//                                             dangerouslySetInnerHTML={{
//                                                 __html: item.label,
//                                             }}
//                                         />
//                                     </Link>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default IdeasSection;

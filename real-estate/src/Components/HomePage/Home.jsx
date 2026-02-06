import React, { useState, useEffect } from "react";
import "./home.css";
import containerImg from "../HomePage/Img/Sub Container.png";
import Container from "../HomePage/Img/Container (1).png";
import Icon1 from "../HomePage/Img/Icon Container (1).png";
import Icon2 from "../HomePage/Img/Icon Container (2).png";
import Icon3 from "../HomePage/Img/Icon Container (3).png";
import Icon4 from "../HomePage/Img/Icon Container.png";
import Icon from "../HomePage/Img/Icon.png";
import { IoArrowUpCircleOutline } from "react-icons/io5";
const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 150);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Home">
      <div className="HomeWrapper">
        <div className="homeContainer">
          <img src={Container} alt="Container" />
          <img className="subContainer" src={containerImg} alt="Home" />
        </div>

        <div className="homeContent">
         
          <h1>Discover Your Dream Property With Estatein</h1>
          <p>
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className="homeBtn_Boxes">
          <button className="learnBtn">Learn More</button>
          <button className="browseBtn">Browse Properties</button>
        </div>
      
        {/* scroll up bnt */}
        <div
          className={"scroll-btn-container" + (showScroll ? " show" : "")}
          onClick={scrollToTop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToTop();
            }
          }}
          aria-label="Scroll to top"
        >
          <IoArrowUpCircleOutline />
        </div>
        {/* scroll up bnt */}
        <div className="report_Section">
          <div className="clients">
            <h3>200+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="customer">
            <h3>70k+</h3>
            <p>Properties For Clients</p>
          </div>
          <div className="experience">
            <h3>16+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="report_Section_Phase_Two">
            <div className="report_Section_Wrapper">
              <div className="Box_Layout">
                <span className="arrow_three">
                  <img src={Icon1} alt="" />
                  <img className="sep" src={Icon} alt="" />
                </span>
                <h5>Find Your Dream Home</h5>
              </div>
              <div className="Box_Layout">
                <span className="arrow_three">
                  <img src={Icon2} alt="" />
                  <img className="sep" src={Icon} alt="" />
                </span>
                <h5>Unlock Property Value</h5>
              </div>
              <div className="Box_Layout">
                <span className="arrow_three">
                  <img src={Icon4} alt="" />

                  <img className="sep" src={Icon} alt="" />
                </span>
                <h5>Effortless Property Management</h5>
              </div>
              <div className="Box_Layout">
                <span className="arrow_three">
                  <img src={Icon3} alt="" />
                  <img className="sep" src={Icon} alt="" />
                </span>
                <h5>Smart Investments, Informed Decisions</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

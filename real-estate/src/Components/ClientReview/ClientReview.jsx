import React from "react";
import groupImg from "../FeaturedPage/Img/Abstract Design.png";
import "./client.css";
import { HiArrowLeft, HiArrowRight, HiStar } from "react-icons/hi";
import containerImg from "../HomePage/Img/Sub Container.png";

const ClientReview = () => {
  return (
    <div className="ClientReview">
      <img src={groupImg} alt="" />

      <div className="clientcontent">
        <span className="propertyText">What Our Clients Say</span>

        <p>
          Read the success stories and heartfelt testimonal from our valued
          client.Discover Discover why they chose Estatein for there real estate
          needs
        </p>
      </div>

      <div className="client_Reviwe_Text">
        <div className="client_Reviwe_wrapper">
          <HiStar className="star" />
          <HiStar className="star" />
          <HiStar className="star" />
          <HiStar className="star" />
          <HiStar className="star" />

          <h3>Exceptional Service!</h3>

          <p>
            Our Experience with Estatein was understanding there team dedication
            professionalism made finding our dream house breeze.highly
            recommended
          </p>
          <div className="client_info">
            <img className="client_img" src={containerImg} alt="" />
            <div className="client_Review_details">
              <span>Olakunle</span>
              <br></br>
              <span className="clientstate">Usa california</span>
            </div>
          </div>
        </div>
        <div className="underline_client"></div>

        <div className="sliderBtns_client">
          <button className="view-all-propertiesBtn">
            View All Testimonials
          </button>

          <HiArrowLeft className="sliderArrow-left right" />
          <span>{/* {image + 1} of {images.length} */}</span>
          <HiArrowRight className="right" />
        </div>
      </div>
      {/* FAQ SECTION */}
      <div className="faq_section">
        <img src={groupImg} alt="" />

        <div className="">
          <span className="propertyText">Frequently Ask Questions</span>

          <p>
            Find answer to common question about Estatein's service, property
            listing and real estate process.we're here to provide clarity and
            assist you every step of the way
          </p>
        </div>

        <div className="client_Reviwe_Text_faq">
          <div className="client_Reviwe_wrapper_faq">
            <h3>How do i search for properties on Estatein?</h3>

            <p className="faq_paragraph">
              Learn how to use our user-friendly search tools to find properties
              that match your criteria.
            </p>

            
          
          </div>
          <div className="btn_faq">
          
            Read More
            
            </div>
          <div className="underline_faq"></div>

          <div className="sliderBtns_faq">
            <button className="view-all-propertiesBtn">
              View All FAQ's
            </button>

            <HiArrowLeft className="sliderArrow-left right" />
            <span>{/* {image + 1} of {images.length} */}</span>
            <HiArrowRight className="right"/>
          </div>
        </div>
        {/* FAQ SECTION */}
      </div>
    </div>
  );
};

export default ClientReview;

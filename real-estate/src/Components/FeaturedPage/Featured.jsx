import React, { useState, useEffect } from "react";
import "./featured.css";
import groupImg from "../FeaturedPage/Img/Abstract Design.png";
import propertyImage from "../FeaturedPage/Img/Image.png";
import bedIcon from "../FeaturedPage/Img/bed.png";
import bathIcon from "../FeaturedPage/Img/shawer.png";
import catalogIcon from "../FeaturedPage/Img/catalog.png";
import { HiArrowLeft, HiArrowRight, HiStar } from "react-icons/hi";

const Featured = () => {
   const [images, setImages] = useState([]);
  const [image, setImage] = useState(0);
const API_KEY = "ZEFyX3bF_628IfrGsCQSaMvRJzm-BXGJpkreXGbLXp4";
useEffect(() => {
        const fetchImages = async () => {
            try {

                const res = await fetch(
                    
                      `https://api.unsplash.com/search/photos?query=real-estate&per_page=20&client_id=${API_KEY}`
                );
                const data = await res.json();
                setImages(data.results);

            } catch (error){
                console.error("Error fecting images:", error)
            }
            

        };

        fetchImages();

    }, []);

  // const images = [
  //   "https://images.unsplash.com/photo-1501183638714-8f3c5a6c5d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
   

  // ];
  

  const prevImage = () => {
    setImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // ******

  return (
    <div className="Featured">
      <div className="ImgContainer">  
        <img  src={groupImg} alt="" />
        <div className="propertyText">
          <span className="propertyText">Featured Properties</span>

          <p>
            Explore our handpicked seletion of featured properties Each listing
            offers a glimpse into expectation homes and inverstment avaliable
            through Estatein
          </p>
        </div>

        <div className="propertyImage">
          <div className="propertyImageContainer">
            <div className="propertyImageWrapper">
              {/* <img className="propertyImage_init" src={propertyImage} alt="" /> */}
            {images.length > 0 ? (
                <img 
                  className="propertyImage_init"
                  src={images[image].urls.regular}
                  alt={images[image].alt_description || "Property image"}
                />
              ) : (
                <p className="loading-text">Loading images...</p>
              )}
            </div>

            {/* contunation */}

            <div className="propertyDetails">
              <h3>Rustic Retreat Cottage</h3>
              <span className="propertyDescription">
                An elegant 3-bedroom in your townhouse in a gated community{" "}
              </span>
            </div>
            <div className="propertyIcons">
              <span className="propertyIcon-design">
                <img src={bedIcon} alt="" />
                <span>4-bedroom</span>
              </span>

              <span className="propertyIcon-design">
                <img src={bathIcon} alt="" />

                <span>3-bathroom</span>
              </span>

              <span className="propertyIcon-design-villa">
                <img src={catalogIcon} alt="" />
                <span>villa</span>
              </span>
            </div>
            <div className="property-price-button">
              <span className="price-Section">
                <span className="price">price</span>
                <h4>$550.000</h4>
              </span>

              <span className="button-Section">
                <button className="property-button-details button">
                  view property details
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="underline">
          <h1></h1>
        </div>
        <div>
          <h1></h1>
          <div className="sliderBtns">
            <button className="view-all-propertiesBtn">
              View All Properties
            </button>

            {/* <HiArrowLeft onClick={()=>setCount(count -1)} className="sliderArrow-left right"/>
             <span>{count} of 60</span>
                      <HiArrowRight onClick={()=>setCount(count +1)} className="right" /> */}

            <HiArrowLeft
              onClick={prevImage}
              className="sliderArrow-left right"
            />
            <span>
              {/* {image + 1} of {images.length} */}
              {images.length > 0 ? `${image + 1} of ${images.length}` : "0 of 0"}
            </span>
            <HiArrowRight onClick={nextImage} className="right" />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Featured;

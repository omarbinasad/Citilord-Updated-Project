import React from "react";
import "./Photos.css";

const Photos = () => {
  return (
    <div className="container">
      <div className="photos-wrap-box">
        <ul className="gallery-Photos-container">
          <li className="image-thumbnail">
            <a href="#lightbox_1">
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_2">
              <img
                src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_3">
              <img
                src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_1">
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_2">
              <img
                src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_3">
              <img
                src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
        </ul>
      </div>{" "}
      {/* <!-- Lightbox Image 01 --> */}
      <div className="light-box" id="lightbox_1">
        <div className="edges">
          <span className="close-btn">
            <a href="#">X</a>
          </span>
          <p className="title">This is First Image</p>
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
              alt="image 01"
              className="swap"
            />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
          <span className="next-btn">
            <a href="#lightbox_2">Next</a>
          </span>
          <span className="previous-btn">
            <a href="#lightbox_6">Previous</a>
          </span>
        </div>
      </div>
      {/* <!-- Lightbox Image 02 --> */}
      <div className="light-box" id="lightbox_2">
        <div className="edges">
          <span className="close-btn">
            <a href="#">X</a>
          </span>
          <p className="title">This is Second Image</p>
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
              alt="image 02"
            />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
          <span className="next-btn">
            <a href="#lightbox_3">Next</a>
          </span>
          <span className="previous-btn">
            <a href="#lightbox_1">Previous</a>
          </span>
        </div>
      </div>
      {/* <!-- Lightbox Image 03 --> */}
      <div className="light-box" id="lightbox_3">
        <div className="edges">
          <span className="close-btn">
            <a href="#">X</a>
          </span>
          <p className="title">This is Thired Image</p>
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
              alt="image 03"
            />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
          <span className="next-btn">
            <a href="#lightbox_4">Next</a>
          </span>
          <span className="previous-btn">
            <a href="#lightbox_2">Previous</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Photos;

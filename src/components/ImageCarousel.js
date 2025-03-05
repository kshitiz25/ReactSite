import React, { useState } from "react";
import "../styles/ImageCarousel.css"; // Import CSS

const images = [
  { src: "/images/image1.jpg", alt: "Resume Analysis" },
  { src: "/images/image2.jpg", alt: "FutureTech Training" },
  { src: "/images/image3.jpg", alt: "Oracle Applications" },
  { src: "/images/image4.jpg", alt: "AI & ML" },
  { src: "/images/image5.jpg", alt: "Cloud Computing" },
  { src: "/images/image6.jpg", alt: "Cyber Security" },
  { src: "/images/image7.jpg", alt: "Data Science" },
  { src: "/images/image8.jpg", alt: "Blockchain Technology" },
  { src: "/images/image9.jpg", alt: "Big Data" },
];

const ImageCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="carousel-container">
      <div
        className={`carousel ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate images for seamless loop */}
        <div className="carousel-track">
          {[...images, ...images].map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="carousel-image"
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen View */}
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <div className="fullscreen-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
            <img src={selectedImage} alt="Enlarged" className="fullscreen-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;

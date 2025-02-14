"use client"
import React, { useState, useEffect } from "react";
import "./carousel.css";

export default function Carousel() {
  const images = [
    "media/img1.jpg", // Replace with your image paths
    "media/img2.jpg",
    "media/img3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="carousel mt-24" >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={index === currentIndex ? "active" : "inactive"}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
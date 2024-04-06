import React, { useState } from "react";
import "./index.css";

function Testimonials() {
  // Define state for the current index of testimonials
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array containing testimonials
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  // Function to handle previous button click
  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  // Function to handle next button click
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  // Render testimonials component
  return (
    <div className="testimonials">
      {/* Display current testimonial */}
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      {/* Display author of current testimonial */}
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      {/* Navigation buttons */}
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;

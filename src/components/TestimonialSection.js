import React from "react";
import "../styles/TestimonialSection.css";

const testimonials = [
  {
    name: "John Doe",
    role: "AI Engineer",
    image: "https://via.placeholder.com/80",
    feedback:
      "Instil-IT has revolutionized the way I approach AI projects. The resume analysis tool helped me land my dream job!",
  },
  {
    name: "Sarah Lee",
    role: "Data Scientist",
    image: "https://via.placeholder.com/80",
    feedback:
      "The FutureTech training is top-notch! It provided me with the latest AI trends and hands-on experience to stay ahead in my field.",
  },
  {
    name: "Michael Smith",
    role: "Software Developer",
    image: "https://via.placeholder.com/80",
    feedback:
      "Oracle-based solutions from Instil-IT streamlined our business processes. Their expertise is unparalleled!",
  },
  {
    name: "Emily Johnson",
    role: "Tech Recruiter",
    image: "https://via.placeholder.com/80",
    feedback:
      "Finding top AI talent has never been easier. Instil-IT’s AI Talent Hub helped us connect with the best candidates!",
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What Our Users Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-feedback">“{testimonial.feedback}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
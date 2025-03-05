import React from "react";
import { FaDatabase, FaGraduationCap, FaUserTie } from "react-icons/fa"; // Import icons
import "../styles/ProductsSection.css";

const products = [
  {
    category: "AI Talent Hub",
    description: "Enhance your job profile with AI-driven resume refinement and expert reviews.",
    icon: <FaUserTie />,
    subcategories: [
      { name: "Resume Refine", link: "#" },
      { name: "Expert Review Panel", link: "#" },
      { name: "Score Marked Talent", link: "#" }
    ],
    link: "#",
  },
  {
    category: "AI Training",
    description: "Stay ahead with FutureTech training designed to upskill professionals.",
    icon: <FaGraduationCap />,
    subcategories: [
      { name: "FutureTech Training", link: "#" }
    ],
    link: "#",
  },
  {
    category: "Oracle Based Product",
    description: "Leverage our Oracle-based solutions for business and automation needs.",
    icon: <FaDatabase />,
    subcategories: [
      { name: "Oracle QE Products", link: "#" }
    ],
    link: "#",
  },
];

const ProductsSection = () => {
  return (
    <div className="products-section">
      <h2 className="section-title" style={{ color: "black" }}>Products of Instil-IT</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="icon" style={{ color: "black" }}>{product.icon}</div>
            <h3 style={{ color: "black" }}>{product.category}</h3>
            <p className="description" style={{ color: "black" }}>{product.description}</p>
            <ul className="subcategories">
              {product.subcategories.map((sub, idx) => (
                <li key={idx} className="subcategory">
                  <a href={sub.link} style={{ color: "black", textDecoration: "none" }}>{sub.name}</a>
                </li>
              ))}
            </ul>
            <a href={product.link} className="learn-more" style={{ color: "black" }}>Learn More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./globals.css";

const features = [
  {
    title: "G-FORCE - HIGH TENSION",
    subtitle: "Unleash ultimate power and precision on the court.",
    image: "/images/1stfinaly.jpg",
  },
  {
    title: "AERODYNAMIC FRAME",
    subtitle: "Designed for speed and control like never before.",
    image: "/images/2ndfinaly.jpg",
  },
  {
    title: "ULTRA DURABLE",
    subtitle: "Built to withstand the toughest smashes.",
    image: "/images/3rdfinaly.jpg",
  },
  {
    title: "LIGHTWEIGHT DESIGN",
    subtitle: "Swing faster, play longer with ease.",
    image: "/images/4finaly.jpg",
  },
];

const rackets = [
  {
    name: "G-Force 9000",
    description: "Lightweight and powerful for beginners and pros alike.",
    image: "/images/racket1.jpg",
    price: "$120",
  },
  {
    name: "TurboForce Pro",
    description: "High durability and optimized for intense matches.",
    image: "/images/racket2.jpg",
    price: "$150",
  },
  {
    name: "AeroStrike Elite",
    description: "Aerodynamic design for unmatched speed and control.",
    image: "/images/racket3.jpg",
    price: "$180",
  },
];

export default function HomePage() {
  const [loadedSections, setLoadedSections] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (!loadedSections.includes(sectionId)) {
              setLoadedSections((prev) => [...prev, sectionId]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureSection = document.getElementById("features");
    if (featureSection) observer.observe(featureSection);

    return () => observer.disconnect();
  }, [loadedSections]);

  return (
    <main>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo gradient-text">RacketPro</div>
        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#rackets">Choose Your Fit</a>
          </li>
          <li>
            <Link href="/accessories">Accessories</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          ref={videoRef}
          src="/1109696_Reflection_Glitter_3840x2160.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1 className="hero-title">
            <span className="gradient-text">The Revolution</span> of Badminton
          </h1>
          <p className="hero-subtitle">
            <span className="gradient-text">Power</span>.{" "}
            <span className="gradient-text">Precision</span>.{" "}
            <span className="gradient-text">Perfection</span>.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`section ${
          loadedSections.includes("features")
            ? "section-visible"
            : "section-hidden"
        }`}
      >
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${feature.image})` }}
              ></div>
              <div className="feature-content">
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-subtitle">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="product-highlight">
        <div className="product-highlight-container">
          <div className="product-highlight-image">
            <img src="/images/main banner.jpg" alt="AxForce 10" />
          </div>
          <div className="product-highlight-content">
            <h2 className="product-highlight-title">AxForce 10</h2>
            <h3 className="product-highlight-subtitle">
              UNPARALLELED POWER AND PRECISION
            </h3>
            <p className="product-highlight-description">
              Engineered to add power and precision in its every swing with a
              flexible shaft, and Wing Frame Design!
            </p>
            <a href="/product/axforce10" className="product-highlight-button">
              GET IT HERE!
            </a>
          </div>
        </div>
      </section>

      {/* Choose Your Fit Section */}
      <section id="rackets" className="rackets-section">
        <h2 className="section-title">Choose Your Fit</h2>
        <p className="section-description">
          Explore our collection of premium rackets and find the perfect fit
          for your game.
        </p>
        <div className="rackets-container">
          {rackets.map((racket, index) => (
            <div className="racket-card" key={index}>
              <div
                className="racket-image"
                style={{ backgroundImage: `url(${racket.image})` }}
              ></div>
              <div className="racket-content">
                <h3 className="racket-name">{racket.name}</h3>
                <p className="racket-description">{racket.description}</p>
                <p className="racket-price">{racket.price}</p>
                <button className="racket-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-image">
          <img src="/images/maininfinay.jpg" alt="Defy Boundaries" />
        </div>
        <div className="cta-content">
          <h2 className="cta-title gradient-text">DEFY BOUNDARIES</h2>
          <p className="cta-description">
            With <span className="gradient-text">Power</span> and{" "}
            <span className="gradient-text">Precision</span>, it’s Your Court,
            Your Rules.
          </p>
          <button className="cta-button">GET YOURS NOW! ➡</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/images/main logo.webp" alt="Logo" />
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>SUPPORT</h3>
              <ul>
                <li>Track your Order</li>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>Payment Methods</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>SELF SERVICE</h3>
              <ul>
                <li>Racket Buying Guide</li>
                <li>Badminton String Guide</li>
                <li>Feather Shuttlecock Guide</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>PAYMENT METHODS</h3>
              <ul>
                <li>VISA Credit/Debit</li>
                <li>Mastercard Credit/Debit</li>
                <li>UPI</li>
                <li>Cash on Delivery below 5k</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>STALK US ON</h3>
              <div className="footer-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Sunlight Sports Studio LLP</p>
          <p>
            No. 155, 2nd Cross Road, 6th Block, Sun City Layout, JP Nagar 7th
            phase, Bangalore KA 560076
          </p>
        </div>
      </footer>
    </main>
  );
}
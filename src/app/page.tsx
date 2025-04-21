"use client";

import React, { useEffect, useRef, useState } from "react";
import "./globals.css";

const sections = [
  {
    id: "features",
    title: "Features",
    content: [
      {
        title: "G-FORCE - HIGH TENSION",
        button: "G-FORCE SERIES",
        image: "/images/1stfinaly.jpg",
      },
      {
        title: "AERODYNAMIC FRAME",
        button: "EXPLORE FRAME",
        image: "/images/2ndfinaly.jpg",
      },
      {
        title: "ULTRA DURABLE",
        button: "LEARN MORE",
        image: "/images/3rdfinaly.jpg",
      },
    ],
  },
];

export default function HomePage() {
  const [loadedSections, setLoadedSections] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set video playback speed
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

    sections.forEach(({ id }) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, [loadedSections]);

  return (
    <main>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">RacketPro</div>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
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
          src="/14783-258991932_small.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1 className="hero-title">The Revolution of Badminton</h1>
          <p className="hero-subtitle">Power. Precision. Perfection.</p>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`section ${loadedSections.includes("features") ? "section-visible" : "section-hidden"}`}
      >
        <h2 className="section-title">Features</h2>
        <div className="features-cards">
          {sections[0].content.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div
                className="feature-card-image"
                style={{ backgroundImage: `url(${feature.image})` }}
              ></div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <button className="feature-card-button">{feature.button} ➡</button>
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
          <h2 className="cta-title">DEFY BOUNDARIES</h2>
          <p className="cta-description">With Power and Precision, it’s Your Court, Your Rules.</p>
          <button className="cta-button">GET YOURS NOW! ➡</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Footer Left Section */}
          <div className="footer-logo">
            <img src="/images/main logo.webp" alt="Logo" />
          </div>

          {/* Footer Links Section */}
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

        {/* Footer Bottom Section */}
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
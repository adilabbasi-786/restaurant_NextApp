import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero1 from "../images/hero/hero-1.jpg";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const HeroSection = () => {
  const [active, setActive] = useState(0);

  const handlePrevSlide = () => {
    setActive((prevActive) => (prevActive - 1 + 3) % 3);
  };

  const handleNextSlide = () => {
    setActive((prevActive) => (prevActive + 1) % 3);
  };

  useEffect(() => {
    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="hero">
      <div className="hero__slider owl-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: `translate3d(-${active * 1519.2}px, 0px, 0px)`,
              transition: "all 0.3s ease 0s",
              width: "4557.6px", // Adjusted width for 3 slides
            }}
          >
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="owl-item"
                style={{ width: "1519.2px" }}
              >
                <div
                  className={`hero__item set-bg ${
                    index === active ? "active" : ""
                  }`}
                  style={{ backgroundImage: `url(${hero1.src})` }}
                >
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-8">
                        <div className="hero__text">
                          <h2 style={{ opacity: 1 }}>
                            {" "}
                            Making your life sweeter one bite at a time!
                          </h2>
                          <a
                            href="#"
                            className="primary-btn"
                            style={{ opacity: 1 }}
                          >
                            Our cakes
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="owl-nav">
          <button
            type="button"
            role="presentation"
            className="owl-prev"
            onClick={handlePrevSlide}
          >
            <MdKeyboardDoubleArrowLeft />
            <i className="fa fa-angle-left">
              <i></i>
            </i>
          </button>
          <button
            type="button"
            role="presentation"
            className="owl-next"
            onClick={handleNextSlide}
          >
            <MdKeyboardDoubleArrowRight />
            <i className="fa fa-angle-right">
              <i></i>
            </i>
          </button>
        </div>
        <div className="owl-dots disabled"></div>
      </div>
    </section>
  );
};

export default HeroSection;

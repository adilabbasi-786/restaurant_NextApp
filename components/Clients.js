import Image from "next/image";
import ta1 from "../images/testimonials/ta-1.jpg";
import ta2 from "../images/testimonials/ta-2.jpg";
import Slider from "react-slick";
import { useState } from "react";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };
  return (
    <section className="testimonial spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <span>Testimonial</span>
              <h2>Our client say</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="testimonial__slider owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: `translate3d(-${activeSlide * 585}px, 0px, 0px)`,
                  transition: "all 1.2s ease 0s",
                  width: "7020px",
                }}
              >
                <div className="owl-item cloned" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Kerry D.Silva</h5>
                          <span>New york</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Ophelia Nunez</h5>
                          <span>London</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Kerry D.Silva</h5>
                          <span>New york</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Kerry D.Silva</h5>
                          <span>New york</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Kerry D.Silva</h5>
                          <span>New york</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Ophelia Nunez</h5>
                          <span>London</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Kerry D.Silva</h5>
                          <span>New york</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Ophelia Nunez</h5>
                          <span>London</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Kerry D.Silva</h5>
                          <span>New york</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned active"
                  style={{ width: "585px" }}
                >
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Kerry D.Silva</h5>
                          <span>New york</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Kerry D.Silva</h5>
                          <span>New york</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "585px" }}>
                  <div className="col-lg-6">
                    <div className="testimonial__item">
                      <div className="testimonial__author">
                        <div className="testimonial__author__pic">
                          <Image alt="" src={ta1} />
                        </div>
                        <div className="testimonial__author__text">
                          <h5>Ophelia Nunez</h5>
                          <span>London</span>
                        </div>
                      </div>
                      <div className="rating">
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star"></span>
                        <span className="icon_star-half_alt"></span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua viverra lacus vel facilisis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button
                type="button"
                role="presentation"
                className="owl-prev"
                onClick={handlePrev}
              >
                <span aria-label="Previous">‹</span>
              </button>
              <button
                type="button"
                role="presentation"
                className="owl-next"
                onClick={handleNext}
              >
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots">
              <button role="button" className="owl-dot">
                <span></span>
              </button>
              <button role="button" className="owl-dot">
                <span></span>
              </button>
              <button role="button" className="owl-dot active">
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

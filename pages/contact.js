import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
const axios = require("axios");

const Contact = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let req = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact-info?populate=*`
    );
    let res = await req.json();
    console.log("API Response:", res.data, Array.isArray(data));
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <section className="contact spad">
        {/* {Array.isArray(data) &&
          data.map((item) => ( */}
        <div className="container">
          <div className="map">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-7">
                  <div className="map__inner">
                    <h6>{data?.attributes?.main_brachcity}</h6>
                    <ul>
                      <li>{data?.attributes?.mainaddress}</li>
                      <li>{data?.attributes?.mainEmail}</li>
                      <li>{data?.attributes?.mainPhoneNumber}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="map__iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212780.2201925677!2d72.85333713221223!3d33.56140540336101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702550895159!5m2!1sen!2s"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <div className="contact__address">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact__address__item">
                  <h6>{data?.attributes?.b1city}</h6>
                  <ul>
                    <li>
                      <span className="icon_pin_alt"></span>
                      <p>{data?.attributes?.b1address}</p>
                    </li>
                    <li>
                      <span className="icon_headphones"></span>
                      <p>{data?.attributes?.b1phoneNumber}</p>
                    </li>
                    <li>
                      <span className="icon_mail_alt"></span>
                      <p>{data?.attributes?.b1email}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact__address__item">
                  <h6>{data?.attributes?.b2city}</h6>
                  <ul>
                    <li>
                      <span className="icon_pin_alt"></span>
                      <p>{data?.attributes?.b2address}</p>
                    </li>
                    <li>
                      <span className="icon_headphones"></span>
                      <p>{data?.attributes?.b2email}</p>
                    </li>
                    <li>
                      <span className="icon_mail_alt"></span>
                      <p>{data?.attributes?.b2phoneNumber}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact__text">
                <h3>Contact With us</h3>
                <ul>
                  <li>Representatives or Advisors are available:</li>
                  <li>Mon-Fri: 5:00am to 9:00pm</li>
                  <li>Sat-Sun: 6:00am to 9:00pm</li>
                </ul>
                <img src="img/cake-piece.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact__form">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Message"></textarea>
                      <button type="submit" className="site-btn">
                        Send Us
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ))} */}
      </section>
      <Footer />
    </>
  );
};

export default Contact;

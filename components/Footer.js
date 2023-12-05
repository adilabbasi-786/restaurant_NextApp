import footerImg from "../images/footer-bg.jpg";
import footerLogo from "../images/footer-logo.png";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer
      className="footer set-bg"
      //   data-setbg="img/footer-bg.jpg"
      style={{ backgroundImage: `url(${footerImg.src})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6>WORKING HOURS</h6>
              <ul>
                <li>Monday - Friday: 08:00 am – 08:30 pm</li>
                <li>Saturday: 10:00 am – 16:30 pm</li>
                <li>Sunday: 10:00 am – 16:30 pm</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__logo">
                <a href="#">
                  <Image src={footerLogo} />
                </a>
              </div>
              <p>
                Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
              <div className="footer__social">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer__newslatter">
              <h6>Subscribe</h6>
              <p>Get latest updates and offers.</p>
              <form action="#">
                <input type="text" placeholder="Email" />
                <button type="submit">
                  <BsFillSendFill />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <p className="copyright__text text-white">
                Copyright ©
                <script>document.write(new Date().getFullYear());</script>2023
                All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  FTS
                </a>
              </p>
            </div>
            <div className="col-lg-5">
              <div className="copyright__widget">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

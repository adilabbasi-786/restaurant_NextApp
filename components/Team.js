import Image from "next/image";
import team1 from "../images/Team/team-1.jpg";
import team2 from "../images/Team/team-2.jpg";
import team3 from "../images/Team/team-3.jpg";
import team4 from "../images/Team/team-4.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Team = () => {
  return (
    <section className="team spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="section-title">
              <span>Our team</span>
              <h2>Sweet Baker </h2>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="team__btn">
              <a href="#" className="primary-btn">
                Join Us
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item set-bg" data-setbg="img/team/team-1.jpg">
              <Image src={team1} />
              <div className="team__item__text">
                <h6>Randy Butler</h6>
                <span>Decorater</span>
                <div className="team__item__social">
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
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item set-bg" data-setbg="img/team/team-2.jpg">
              <Image src={team2} />
              <div className="team__item__text">
                <h6>Randy Butler</h6>
                <span>Decorater</span>
                <div className="team__item__social">
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
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item set-bg" data-setbg="img/team/team-3.jpg">
              <Image src={team3} />
              <div className="team__item__text">
                <h6>Randy Butler</h6>
                <span>Decorater</span>
                <div className="team__item__social">
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
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team__item set-bg" data-setbg="img/team/team-4.jpg">
              <Image src={team4} />
              <div className="team__item__text">
                <h6>Randy Butler</h6>
                <span>Decorater</span>
                <div className="team__item__social">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

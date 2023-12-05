import Header from "../components/Header";
import { FaPlay } from "react-icons/fa";
import YoutubeVideo from "../components/YoutubeVideo";
import Image from "next/image";
import videoImg from "../images/about-video.jpg";
const about = () => {
  return (
    <>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__text">
                <h2>About</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>About</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="about__video set-bg"
                data-setbg="img/about-video.jpg"
                style={{ backgroundImage: 'url("img/about-video.jpg")' }}
              >
                <Image alt="" src={videoImg} />
                <a
                  href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&amp;list=RD8PJ3_p7VqHw&amp;start_radio=1"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="about__text">
                <div className="section-title">
                  <span>About Cake shop</span>
                  <h2>Cakes and bakes from the house of Queens!</h2>
                </div>
                <p>
                  The Cake Shop is a Jordanian Brand that started as a small
                  family business. The owners are Dr. Iyad Sultan and Dr. Sereen
                  Sharabati, supported by a staff of 80 employees.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about__bar">
                <div className="about__bar__item">
                  <p>Cake design</p>
                  <div id="bar1" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="95"></span>
                  </div>
                </div>
                <div className="about__bar__item">
                  <p>Cake className</p>
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="80"></span>
                  </div>
                </div>
                <div className="about__bar__item">
                  <p>Cake Recipes</p>
                  <div id="bar3" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="90"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;

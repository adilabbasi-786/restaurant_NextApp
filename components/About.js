const About = () => {
  return (
    <section className="about spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="about__text">
              <div className="section-title">
                <span>About Cake shop</span>
                <h2>Cakes and bakes from the house of Queens!</h2>
              </div>
              <p>
                The "Cake Shop" is a Jordanian Brand that started as a small
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
                  <div className="tipWrap" style={{ display: "inline" }}>
                    <span
                      className="tip"
                      style={{
                        left: "494.262px",
                        transition: "left 2s ease-in-out 0s",
                      }}
                    >
                      95%
                    </span>
                  </div>
                  <span
                    className="fill"
                    data-percentage="95"
                    style={{
                      background: "rgb(17, 17, 17)",
                      width: "95%",
                      transition: "width 2s ease-in-out 0s",
                    }}
                  ></span>
                </div>
              </div>
              <div className="about__bar__item">
                <p>Cake Class</p>
                <div id="bar2" className="barfiller">
                  <div className="tipWrap" style={{ display: "inline" }}>
                    <span
                      className="tip"
                      style={{
                        left: "409.038px",
                        transition: "left 2s ease-in-out 0s",
                      }}
                    >
                      80%
                    </span>
                  </div>
                  <span
                    className="fill"
                    data-percentage="80"
                    style={{
                      background: "rgb(17, 17, 17)",
                      width: "80%",
                      transition: "width 2s ease-in-out 0s",
                    }}
                  ></span>
                </div>
              </div>
              <div className="about__bar__item">
                <p>Cake Recipes</p>
                <div id="bar3" className="barfiller">
                  <div className="tipWrap" style={{ display: "inline" }}>
                    <span
                      className="tip"
                      style={{
                        left: "464.938px",
                        transition: "left 2s ease-in-out 0s",
                      }}
                    >
                      90%
                    </span>
                  </div>
                  <span
                    className="fill"
                    data-percentage="90"
                    style={{
                      background: "rgb(17, 17, 17)",
                      width: "90%",
                      transition: "width 2s ease-in-out 0s",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

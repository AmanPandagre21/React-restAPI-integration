import React from "react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="container middleLayer">
        <div className="row">
          <div className="col-md-12 col-12 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12 mx-auto main_left">
                <p>WELCOME TO MY WEBSITE</p>
                <h1>
                  You can check{" "}
                  <span style={{ color: "aquamarine" }}>WEATHER</span> by
                  clicking the button
                </h1>
                <NavLink to="/Weather">
                  <button className="btn btn-secondary">WEATHER</button>
                </NavLink>
              </div>
              <div className="col-md-6 col-12 mx-auto main_right">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                      <img src="images/b4.png" className="" alt="crasouleImg" />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                      <img src="images/b5.png" className="" alt="crasouleImg" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/b6.png" className="" alt="crasouleImg" />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;

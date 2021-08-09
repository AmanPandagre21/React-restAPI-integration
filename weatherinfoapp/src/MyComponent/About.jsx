import React from "react";

const About = () => {
  return (
    <>
      <div className="container middleLayer">
        <div className="row">
          <div className="col-md-12 col-12 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12 mx-auto main_right">
                <img src="images/b2.png" className="w-100" alt="img" />
              </div>

              <div className="col-md-6 col-12 mx-auto main_left">
                <p>WELCOME TO MY WEB</p>
                <h1>
                  My name is{" "}
                  <span style={{ color: "aquamarine" }}>aman pandagre</span>, i
                  build this webapp using reactjs
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

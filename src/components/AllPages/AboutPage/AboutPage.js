import React from "react";
// import './About.css';
import profilePic from "../../../images/green.png";
import resumeSrc from "../../../images/resume of jahid updated.pdf";
import GetAppIcon from "@material-ui/icons/GetApp";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Home/Footer/Footer";
import "../AboutPage/AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="about about-responsive" id="aboutPage">
        <div className="container-fluid">
          <div
            className="row px-3 "
            style={{ maxWidth: "1300px", margin: "auto" }}
          >
            <div className="col col-md-3 d-flex justify-content-center">
              <img className="profile mb-4" src={profilePic} alt="" />
            </div>
            <div className="col col-md-9 pl-3">
              <h2> About Me </h2>
              <p className="text-justify">
                I am a professional Web Developer & designer with 1 years of
                experience. I have completed one long term course on Jhankar
                Mahbub from Programming Hero.I know HTML, CSS, Bootstrap4,
                React-Bootstrap, JavaScript, ES6, ReactJS, Material-ui, NodeJS,
                ExpressJS, MongoDB and Wordpress(basic). As my profession and
                career object I will probably give 100% difficult work and exact
                Service.
              </p>

              <div className="row">
                <div className="col-md-6 contact-details">
                  <h2>Contact Details</h2>
                  <p className="address" style={{ color: "gray" }}>
                    <span> Md. Jahidul islam </span>
                    <br />
                    <span>
                      {" "}
                      Dhakhingaon, Nandipara
                      <br />
                      Dhaka Bangladesh.
                    </span>
                    <br />
                    <span>+880 1938901990</span>
                    <br />
                    <span> za0162hid@gmail.com </span>
                  </p>
                </div>
                <div className=" col col-md-6 col-sm-12 download">
                  <p className=" download-button ">
                    <a href={resumeSrc} className="text-white" download>
                      {" "}
                      <GetAppIcon /> Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default AboutPage;

import React from 'react';
import './About.css';
import profilePic from '../../../images/green.png'
import resumeSrc from '../../../images/resume with website.pdf';
import GetAppIcon from '@material-ui/icons/GetApp';

const About = () => {
    return (
        <section className="about" id="About">
            <div className="container-fluid">
                <div className="row px-3 " style={{maxWidth: "1300px",margin: "auto"}}>
                    <div className="col col-md-3 d-flex justify-content-center">
                        <img className="profile mb-4" src={profilePic} alt="" />
                    </div>
                    <div className="col col-md-9 pl-3">
                        <h2> About Me </h2>
                        <p className="text-justify">I am a professional Web Developer & designer with 1 years of experience. I
                        have completed one long term course on 
                        Jhankar Mahbub" from Programming Hero. As my profession and career object
                        I will probably give 100% difficult work and exact Service.</p>

                        <div className="row">
                            <div className="col-md-6 contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>  Md. Jahidul islam  </span><br />
                                    <span> Dhakhingaon, Nandipara<br />
                                    Dhaka Bangladesh.
                                    </span><br />
                                    <span>+880 1938901990</span><br />
                                    <span> za0162hid@gmail.com </span>
                                </p>
                            </div>
                            <div className=" col col-md-6 col-sm-12 download">
                            <p  className=" download-button ">
                                <a href={resumeSrc}  className="text-white"  download > <GetAppIcon/> Download Resume</a>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
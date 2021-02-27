import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <footer id="Footer">
            <div className="row">
                <div className="col-md-12">
                    <div className="social">
                        <a href="https://github.com/jahid777?tab=repositories"> <GitHubIcon/> </a>
                        <a href="https://www.linkedin.com/in/md-jahidul-islam-9578941a6"> <LinkedInIcon/> </a>
                        <a href="facebook.com/zahid.hassain.51"> <FacebookIcon/>  </a>
                        {/* <a href="https://www.instagram.com/mainul_islam_faruqi/"> <InstagramIcon/> </a> */}
                    </div>

                    {/* <p>
                          Modified with love by the Answarit team <span> ♥️ </span>  
                    </p> */}

                    <p className="copyright">
                          &copy; <span style={{color:'gray!important'}}>All credit goes to Jahidul Islam - Copyright 2020 Jahidul Islam   
                          Developed by</span> <a title="Styleshout" href="http://www..com/">Jahidul Islam</a>   
                    </p>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import './Header.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typical from 'react-typical'

const Header = () => {
    return (
        <header> 
            <div  className="header container" id="Header">
                <div  className="row banner " >
                    <div className="banner-text"  >
                        <h1 className="headline text-center">
                             I'm{''}
                            <span className="animated-text" > 
                             <Typical
                             loop={Infinity}
                             wraper=''
                             steps={[
                                'Jahidul Islam',
                                1000,
                                'a Frontend Engineer 💻',
                                1000,
                                'a React Developer 🥰',
                                1000,
                                'a Full-Stack Web Developer 📱',
                                1000,
                             ]}
                             />
                             </span>
                        </h1>
                        <div className="status"><ul> <li> Web Developer</li> <li> Crazy React  Lover </li></ul></div>
                        <h3><span> React Web Developer.</span> A self-taught software developer with deep interest in javascript && wordpress.  </h3>
                        
                        <div className="social">
                            <a href="https://github.com/jahid777?tab=repositories"> <GitHubIcon/> </a>
                            <a href="https://www.linkedin.com/in/md-jahidul-islam-9578941a6"> <LinkedInIcon/> </a>
                            <a href="facebook.com/zahid.hassain.51" target="_blank"> <FacebookIcon/>  </a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import Navbar from '../../Shared/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import {link} from "react-scroll";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Resume/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;








// const Home = () => {
//         return (
//             <div>
//                 <Link
//     activeClass="active"
//     to="Navbar"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
// ></Link>


// <Link
//     activeClass="active"
//     to="Header"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
// ></Link>

// <Link
//     activeClass="active"
//     to="About"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
// ></Link>

// <Link
//     activeClass="active"
//     to="Resume"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
// ></Link>


// <Link
//     activeClass="active"
//     to="Portfolio"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
// ></Link>

// <Link
//     activeClass="active"
//     to="Testimonials"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
// ></Link>


// <Link
//     activeClass="active"
//     to="Contact"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
// ></Link>

// <Link
//     activeClass="active"
//     to="Footer"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
// ></Link>
//             </div>
//         );
//     };
    
//     export default Home;
import React from 'react';
import './Portfolio.css';
import resumeData from '../../../fakeData/resumeData';

import LinkIcon from '@material-ui/icons/Link';

const Portfolio = () => {
   
        const projects = resumeData[0].projects.slice(0,8).map(projects =>{
            var projectImage = require(`../../../images/portfolio/${projects.image}`)
            return <div key={projects.title} className="col-lg-3 col-md-6 col-sm-6 columns portfolio-item">
                <div className="item-wrap">
                <a href={projects.url} title={projects.title}>
                    <img style={{height:'180px'}} src={projectImage} alt={projects.title}  />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                            <h5> {projects.title} </h5>
                            <p> {projects.category} </p>
                        </div>
                    </div>
                    <div className="link-icon"> <LinkIcon/> </div>
                </a>
                </div>
                
            </div>
        })
    return (
        <section id="portfolio" className="container-fluid" id="Portfolio">
            <div className="row projects" style={{maxWidth: "1300px",margin: "auto"}}>
                <div className="col-md-12 collapseed">
                <h1 className="" > <span> projects </span></h1>
                    <h1 className="mb-2"> Check Out Some of MY projects </h1>
                    <div id="portfolio-wrapper" className=" bgrid-quarters s-bgrid-thirds cf">
                        {projects}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
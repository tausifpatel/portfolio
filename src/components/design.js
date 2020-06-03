import React from 'react';
import { Link } from "gatsby"

import './design.scss';
import './project.scss';
import './layout.scss';

const Design = props => (
    <div className="container-ultrawide">
        <div className="project design">
            <div>
                <a href={props.link} target="blank"> <img className="design__img" src={props.image} alt=""/> </a>
            </div>
            <div className="project__textarea design-margin">
                <a className="project__title" href={props.link} target="blank"> {props.title} </a>
                <p className="project__description"> {props.description} </p>
                <div className="project__links">
                    <div>
                        {props.caseStudy ? <Link className="project__link" to={props.caseStudy}> Explore &rarr;</Link> : <div></div> }
                    </div>
                    <div>
                        {props.github ? <a className="project__link project__link-git"  href={props.github} target="blank"> Code on GitHub </a> : <div></div> }
                    </div>
                </div>
            </div>
            
            {/* <a className="project__link"  href={props.github} target="blank"> Code on GitHub &rarr; </a>  */}
           
        </div> 
    </div>
)

export default Design
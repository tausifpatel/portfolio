import React from 'react';
import { Link } from "gatsby"

import './project.scss';
import './layout.scss';

const Project = props => (
    <div className="project">
        <div className="container">
            <a href={props.link} target="blank"> <img className="project__img" src={props.image} alt=""/> </a>
            <a className="project__title" href={props.link} target="blank"> {props.title} </a>
            <p className="project__description"> {props.description} </p>
            <div className="project__links">
                <div>
                    {props.caseStudy ? <Link className="project__link" to={props.caseStudy}> Case study &rarr;</Link> : <div></div> }
                </div>
                <div>
                    {props.github && <a className="project__link"  href={props.github} target="blank"> Code on GitHub &rarr;</a>}
                </div>
            </div>
        </div> 
    </div>
)

export default Project
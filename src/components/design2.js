import React from 'react';
import { Link } from "gatsby"

import './design2.scss';
import './layout.scss';

const Design2 = props => (
    <div className="wrapper-blue">
        <div className="container-ultrawide">
            <div className="design2">
                <div className="design2__textarea">
                    <a className="design2__title" href={props.link} target="blank"> {props.title} </a>
                    <p className="design2__description"> {props.description} </p>
                    <div className="design2__links">
                        <div>
                            {props.caseStudy ? <Link className="design2__link" to={props.caseStudy}> Case study </Link> : <div></div> }
                        </div>
                        <div>
                            {props.github ? <a className="design2__link project__link-git"  href={props.github} target="blank"> Code on GitHub </a> : <div></div> }
                        </div>
                    </div>
                </div>
                <div>
                    <a href={props.link} target="blank"> <img className="design2__img" src={props.image} alt=""/> </a>
                </div>
            </div> 
        </div>
    </div>
)

export default Design2
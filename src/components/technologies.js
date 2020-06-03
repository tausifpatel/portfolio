import React from 'react';
import './technologies.scss';
import './layout.scss';

import icons from '../images/sprite.svg';

const Technologies = props => (
    <div className="tech">
        <div className="container">
            <p className="tech__title-small"> Behind the scenes </p>
            <h1 className="tech__title"> Technologies </h1>
            <div className="tech__content">
                <div className="tech__logos">
                    <svg className="tech__logo">
                        <use xlinkHref={`${icons}#${props.icon1}`} />
                    </svg>
                    <svg className="tech__logo">
                        <use xlinkHref={`${icons}#${props.icon2}`} />
                    </svg>
                    <svg className="tech__logo">
                        <use xlinkHref={`${icons}#${props.icon3}`} />
                    </svg>
                    <svg className="tech__logo">
                        <use xlinkHref={`${icons}#${props.icon4}`} />
                    </svg>
                    <svg className="tech__logo">
                        <use xlinkHref={`${icons}#${props.icon5}`} />
                    </svg>
                    <svg className="tech__logo">
                        <use xlinkHref={`${icons}#${props.icon6}`} />
                    </svg>
                    <svg className="tech__logo">
                        <use xlinkHref={`${icons}#${props.icon7}`} />
                    </svg>
                </div>
                <p className="tech__text">
                    This portfolio has been built with a static site generator for React – Gatsby.js, with it's pre-configured most performant Webpack. 
                </p>

                <p className="tech__text">
                    All the previous projects have been built using <strong>HTML5, CSS3, JavaScript</strong> and few JQuery plugins. The required dependencies have been installed using <strong>node package manager(npm)</strong>, where all files were combined and injected into appropriate project folders using a task runner - <strong>Gulp.</strong>
                </p>

                <p className="tech__text">
                    All the prototypes and design files have been created using <strong>Figma.</strong>
                </p>

                <p className="tech__text">
                    While learning new skills, I have been keeping myself abreast with the ever improving Software Engineers' world using various platforms such as Medium, Youtube, podcasts and E-mail subscriptions.
                </p>
            </div>
        </div>
    </div>
)

export default Technologies
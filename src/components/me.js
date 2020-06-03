import React from "react";
import Header from './header';
import Footer from './footer';
import './me.scss';


const Me = () => (
    <div className="me">
        <Header />
        <div className="container-ultrawide">
            <h1 className="me__title">A bit about myself..</h1>  
        </div> 

        <div className="container-ultrawide row">
            
            <div className="col text">
                <div className="me__textbox">
                    <p className="me__textbox-text">
                        I have always had a creative bone although my professional path has taken many twists and turns from a pharmacist to managerial position, to finally-thankfully self taught Front-End Developer.
                    </p>
                    <p className="me__textbox-text-loud">
                        'I have never stopped exploring my passion and I am happy I stumbled upon the path of Web Development.'
                    </p>
                    <p className="me__textbox-text"> 
                        The learning process has been the most exciting project of my life. I discovered, a new, more efficient and more adaptable side of me. In a very short period of time, I have managed to achieve a position to take projects on hand as a freelancer, leading me to explore the market and master the skills of web development.
                    </p>
                    <p className="me__textbox-text">
                        As a Front-End Developer, I put my best self forward. I enjoy using my next to perfectionist traits in coding with my unambiguous skills to create new designs keeping minimalism in centre. I pay high attention to detail and try to write a clean, elegant and efficient code. It excites me to be in this field as to make new creative things is my forte. I plan to make a big impact on world possibly with a high growth company.
                    </p>
                    <p className="me__textbox-text-loud blue margin-top">
                        Current/
                    </p>
                    <p className="me__textbox-text">
                        Currently, I am learning React. <br/>
                        To understand React Hooks, I have developed a simple <a target="blank" href="https://react-finds-weather.netlify.app" className="me__textbox-link">weather app</a> to get hands on experience on functional components getting more powerful with React Hooks and worked on Context API. The code can be reviewed on a <a target="blank" href="https://github.com/tausifpatel/weather-finder" className="me__textbox-link">Github Repository</a>.                
                    </p>
                    <p className="me__textbox-text">
                        Diving deep into advanced concepts of JavaScript and ES6.
                    </p>
                    <p className="me__textbox-text">
                        At the same time, I am learning Ruby and reading a book called Practical Object Oriented Design in Ruby by Sandi Metz to understand Object Oriented Programming.
                    </p>
                    <p className="me__textbox-text-loud margin-top">
                        Other interests
                    </p>
                    <p className="me__textbox-text">
                        I love <a className="me__textbox-link" target="blank" href="https://www.instagram.com/__sevenine/"> photography</a>, making videos and watching films with good Cinematography.
                    </p>
                    <p className="me__textbox-text">
                        I'm always interested in working on new projects.
                    </p>
                </div>       
            </div> 

            <div className="col picture">
                <img className="me__image" src={require("../images/me-vert.jpg")} alt=""/> 
            </div>
        </div>

        <Footer
            icon8="icon-github-brands"
            icon9="icon-dribbble-brands"
            icon10="icon-twitter-brands"
            icon11="icon-instagram-brands" 
        />
    </div>
)

export default Me
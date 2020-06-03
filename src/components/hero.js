import React from 'react'
import { Link } from "gatsby"
import Header from '../components/header'
import '../components/hero.scss'

const Hero = () => (
        <div className="hero-wrap">
        <Header />
            <div className="container-wide">
            
                <div className="hero">                     
                    <p className="hero__text">
                        <span className="hero__text-name">Tausif — </span> <br/> London based <br/> Front End Developer /
                        Designer and <br/>
                        Photographer
                    </p>
                    
                    <p className="hero__subtext">
                        I have always had a creative bone although my professional path has taken many twists and turns from a pharmacist to managerial position, to finally-thankfully self taught Front-End Developer.
                        <br/>
                        <br/>
                        <Link className="hero__subtext-link" to="about"> Let's dive deep &rarr; </Link> 
                    </p>
                </div> 
            </div> 
        </div>  
)

export default Hero
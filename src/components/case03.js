import React from 'react'
import Header from './header'
import Others from './others'
import './case01.scss'
import './case02.scss'
import './case03.scss'

const Case03 = () => (
    <div className="case03">
        <Header />
        <div className="case03__head">
            <div className="container">
                <div className="case03__title">Movies</div>
                <div className="case03__subtitle">Concept for an App to collect movies and shows</div>
            </div>
        </div>

        <div className="container">
            <h3 className="case01__title-small">Long story short</h3>
            <p className="case01__text">
                Us friends always text each other about movies and shows recommendations. And then it is extremely difficult to scroll through messages to find out who suggested what. To keep it simple, I designed an app to collect favourite movies and TV shows where everyone can see each others' lists and weekends are sorted. 
            </p>
            <h3 className="case01__title-medium">
                Design
            </h3>
            <p className="case01__text">
                I love to play with subtle colour, where slight tint of a particular colour can set the character to an app. I have used subtle blue colour which renders the refreshing bright screen making dark blue text stand out. 
            </p>
            <div className="case02__num">01. Front Page</div>
            <div className="case03__img-box">
                <img className="case03__img" src={require('../images/project03/page1.png')} alt=""/>
            </div>
            
            <div className="case02__num">02. Main Page</div>
            <div className="case03__img-box">
                <img className="case03__img-1" src={require('../images/project03/page2.png')} alt=""/>
            </div>

            <h3 className="case01__title-small">What is what</h3>
            <p className="case01__text">
                On a top left corner is a film genre, which can be changed by clicking menue (blue four dots) on top right corner. The menue will have more options such as catagories (Action, Thriller, Dark, Horror, Comedy), critically acclaimed films, oscar nominated films and shows etc..
            </p>
            <p className="case01__text">
                Let's say you want to add Bladerunner to your to be watched list, all you have to do is click on a tag on top left corner of a movie card. The blue tag icon on bottom left corner would show your watch list.
            </p>

            <div className="case02__num">03. Selected Page</div>
            <div className="case03__img-box">
                <img className="case03__img-2" src={require('../images/project03/page3.png')} alt=""/>
            </div>
            
            <h3 className="case01__title-small">What's next</h3>
            <p className="case01__text">
                I will be working more in depth, creating more pages through thinking as a user. And then I will work on the ever interesting <span className="dark">Dark Mode</span>of the App.
            </p>
        </div>
        <Others />
    </div>
)

export default Case03
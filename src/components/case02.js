import React from 'react'
import Header from './header'
import Others from './others'
import './case01.scss'
import './case02.scss'

const Case02 = () => (
    <div className="case02">
        <Header />
        
        <div className="case02__head">
            <div className="container">
                <div className="case02__title">Weekend</div>
                <div className="case02__subtitle">A concept desing for a blog Website.</div>
            </div>
        </div>
        <div className="container">
            <h3 className="case01__title-small">Long story short</h3>
            <p className="case01__text">
                I have always enjoyed reading various blogs on Technologies, Architectures, lifestyle, Music etc. It can be a great experience if you can find unique blog posts in one place. Considering the idea of putting cool stuff on a single page, I created a Webdesign concept exploring minimal style, keeping colours subtle. 
            </p>
            <div className="case02__num">01. Home Page</div>
            <img className="case02__img" src={require('../images/project02/weekend-1.png')} alt=""/>
            <div className="case02__num">02. Article Page</div>
        </div>
        <div className="container-ultrawide">
            <img className="case02__img" src={require('../images/project02/weekend-2.png')} alt=""/>
        </div>
        <Others />
    </div>
)

export default Case02
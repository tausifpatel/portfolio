import React from 'react'
import Header from './header'
import Others from './others'
import './case01.scss'
import './case02.scss'
import './case03.scss'
import './case04.scss'

const Case04 = () => (
    <div className="case04">
        <Header />
        <div className="case04__head">
            <div className="container">
                <div className="case04__title">UberPool</div>
                <div className="case04__subtitle">UberPool website redesign concept</div>
            </div>
        </div>

        <div className="container">
            <h3 className="case04__title-small">Long story short</h3>
            <p className="case04__text">
                When I saw the UbePool website, It occured to me that why not try redesigning a landing page that has the smooth flow with clear directions, same as company's service. 
            </p>
        </div>

        <div className="case04__img-box">
            <img className="case04__img" src={require('../images/project04/uber.png')} alt=""/>
        </div>
        
        <Others />
    </div>
)

export default Case04
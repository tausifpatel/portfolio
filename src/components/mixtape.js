import React from 'react'
import '../components/mixtape.scss'

const Mixtape = (props) => (
    <div className="container">
        <div className="mixtape">
            <img className="mixtape__image" src={props.image} alt="album-cover"/>
            <h1 className="mixtape__title">{props.title}</h1>
            <p className="mixtape__text">{props.text}</p>
            <a className="mixtape__link" href={props.link} target="blank"> Listen now </a>
        </div>
    </div>
)

export default Mixtape
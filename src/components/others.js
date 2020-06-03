import React from 'react'
import { Link } from "gatsby"
import './others.scss'
import './case01.scss'

const Others = () => (
    <div className="others">
        <div className="container">
            <div className="others__title-small"> Other Projects – </div>    
            <div className="others__links">
                <Link className="others__link" to="/steelbeauty" activeClassName="active">SteelBeauty</Link>
                <Link className="others__link" to="/weekend" activeClassName="active">Weekend</Link>
                <Link className="others__link" to="/movies" activeClassName="active">Movies</Link>
                <Link className="others__link" to="/uber" activeClassName="active">UberPool</Link>
            </div>
        </div>
    </div>
)

export default Others
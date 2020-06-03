import React from 'react'
import './gallery.scss'


const Gallery = () => (
    <div className="gallery-wrap">
        <div className="gallery container-ultrawide">
            <div className="gallery__heading">Photography</div>
            <div className="gallery__subheading">Selected pictures from my photography experiments</div>
            <div className="gallery__wrapper">
                <img src={require('../images/gallery/red.jpg')} alt="" className="gallery__pic"/>
                <img src={require('../images/gallery/gherkin.jpg')} alt="" className="gallery__pic"/>
                <img src={require('../images/gallery/ug-2.jpg')} alt="" className="gallery__pic"/>
                <img src={require('../images/gallery/ben.jpg')} alt="" className="gallery__pic"/>
                <img src={require('../images/gallery/lb.jpg')} alt="" className="gallery__pic"/>
                <img src={require('../images/gallery/cab.jpg')} alt="" className="gallery__pic"/>
                <img src={require('../images/gallery/tower.jpg')} alt="" className="gallery__pic"/>
                <img src={require('../images/gallery/walkie.jpg')} alt="" className="gallery__pic"/>
            </div>
        </div>
    </div>
)

export default Gallery
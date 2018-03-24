import React, { Component } from 'react';
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header"><video id="my-video" id="video" controls autoPlay="autoplay" loop="loop" muted="" 
            webkit-playsinline="true" playsinline="true" 
            src={require("../Squares.mp4")} /></div>
        );
    }
}
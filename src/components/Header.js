import React from 'react';
import config from '../../config';
import logo from "../assets/gifs/logo_klimakrise_schnelldurchlauf.gif" // Tell webpack this JS file uses this image

export default function Header() {
  return (
    <div>
    <div id="logo">
    <img src={logo} role="presentation" className="custom-logo" />
    <p>Mit Videos, nicht nur langweiliger Text - versprochen!</p>
    <p><a className="button" href="#letsGo">Let's go!</a></p>
    <h1>{config.heading}</h1>
    </div>
    </div>
  );
}

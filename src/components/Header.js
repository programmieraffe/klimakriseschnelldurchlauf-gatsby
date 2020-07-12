import React from 'react';
import config from '../../config';
import logo from "../assets/gifs/logo_klimakrise_schnelldurchlauf.gif" // Tell webpack this JS file uses this image


// 2dO: change author to yaml front matter
export default function Header() {
  return (
    <div>
      <div id="logoHeader">
      <h1>{config.heading}</h1>
      <div className="descriptionTop">{config.descriptionTop}</div>
      <a href="#letsGo"><img src={logo} role="presentation" className="logo" /></a>
      <div><a className="button" href="#letsGo">{config.buttonText}</a></div>
      <div className="descriptionBottom">{config.descriptionBottom}</div>
      </div>

    </div>
  );
}

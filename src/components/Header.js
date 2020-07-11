import React from 'react';
import config from '../../config';
import logo from "../assets/gifs/logo_klimakrise_schnelldurchlauf.gif" // Tell webpack this JS file uses this image


// 2dO: change author to yaml front matter
export default function Header() {
  return (
    <div>
      <div id="logo">
      <h1>{config.heading}</h1>
      <p>🕒  Lesedauer: ca. 2 Bier oder Mate | 👨‍💻 Text: Matthias Andrasch</p>
      <img src={logo} role="presentation" className="custom-logo" />
      <p><a className="button" href="#letsGo">Let's go!</a></p>
      <p className="subHeading">(Mit Videos, nicht nur langweiliger Text - versprochen!)</p>
      </div>

    </div>
  );
}

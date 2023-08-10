import React, { useState, useEffect, useRef } from 'react';

function Footer({ titleLayout, subtitleLayout, block1, block2 }) {

  return (

    <footer className="foot">
        <div className= "d-flex justify-content-around">
            <div className="flex-item">
                        <p>Copyright</p>
                        <p>San Telmo - CABA - Argentina.</p>
            </div>
            <div className="flex-item">
                <a href="https://www.instagram.com/augustoocchiuzzi/" target="_BLANK" >
                    <img className="imagenInsta mr-5" alt="Instagram" src="https://www.pngkit.com/png/full/85-856104_new-instagram-logo-transparent-related-keywords-logo-instagram.png"/>
                </a>

                <a href="https://www.linkedin.com/in/augusto-occhiuzzi-b06640160/" target="_BLANK" >
                    <img className="imagenLinkedin"alt="LinkedIn" src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"/>
                </a>
            </div>
        </div>
    </footer>

  );
}

export default Footer;

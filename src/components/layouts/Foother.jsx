import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {

  return (

    <footer className="foot">
        <div className= "d-flex justify-content-around">
            <NavLink className="navlink" to="/contact#top">
                <div className='contact-p d-flex justify-content-center'>
                    <p className=" bg-slate-300">Contact me</p>
                </div>
            </NavLink>
            <div className="flex-item">
                <a href="https://github.com/augustoocch " target="_BLANK" >
                    <img className="imagenFoot mr-5" alt="Instagram" src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"/>
                </a>
                
                <a href="https://www.instagram.com/augustoocchiuzzi/" target="_BLANK" >
                    <img className="imagenFoot mr-5" alt="Instagram" src="https://www.pngkit.com/png/full/85-856104_new-instagram-logo-transparent-related-keywords-logo-instagram.png"/>
                </a>

                <a href="https://www.linkedin.com/in/augusto-occhiuzzi-developer/" target="_BLANK" >
                    <img className="imagenFoot"alt="LinkedIn" src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"/>
                </a>
            </div>
        </div>
    </footer>

  );
}

export default Footer;


//<i className="fa-brands fa-github mr-5" style={{ color: '#ffffff', fontSize: '25px', alignContent: 'left' }}></i>
               
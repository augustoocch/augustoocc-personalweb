import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {

  return (

    <footer className="foot">
        <div className= "d-flex justify-content-around">
            <NavLink className="navlink" to="/contact">
                <div className='contact-p d-flex justify-content-center'>
                    <p className=" bg-slate-300">Contact me</p>
                </div>
            </NavLink>
            <div className="flex-item">
                <a href="https://www.instagram.com/augustoocchiuzzi/" target="_BLANK" >
                    <img className="imagenInsta mr-5" alt="Instagram" src="https://www.pngkit.com/png/full/85-856104_new-instagram-logo-transparent-related-keywords-logo-instagram.png"/>
                </a>

                <a href="https://www.linkedin.com/in/augusto-occhiuzzi-developer/" target="_BLANK" >
                    <img className="imagenLinkedin"alt="LinkedIn" src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"/>
                </a>
            </div>
        </div>
    </footer>

  );
}

export default Footer;

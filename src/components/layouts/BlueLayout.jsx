import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';


function BlueLayout({ titleLayout, subtitleLayout, text1, text2, destination1, destination2 }) {

  return (
      <div className="container mt-5 mb-5 text-center block-dark">
        <h2 className="pt-5 pb-5">{titleLayout}</h2>

        <div className='subtitle-container d-flex justify-content-center'>
          <p className=" bg-slate-300">{subtitleLayout}</p>
        </div>

        <div className='container '>
        <div className='row justify-center justify-content-around'>
          <div id="technology" className="col-sm-8 col-md-4 mt-5 mb-5 landing-blocks" data-aos="zoom-in" data-aos-duration="1500" >
            <NavLink className="navlink" to={destination1}>
              <button className="pt-5 pb-5">{text1}</button>
            </NavLink>  
          </div>
          <div id="projects" className="col-sm-8 col-md-4 mt-5 mb-5 landing-blocks" data-aos="zoom-in" data-aos-duration="1500" >
            <NavLink className="navlink" to={destination2}>
              <button className="pt-5 pb-5" >{text2}</button>
            </NavLink >
          </div>
        </div>
        </div>
      </div>

  );
}

export default BlueLayout;

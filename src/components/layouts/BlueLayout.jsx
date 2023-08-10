import React, { useState, useEffect, useRef } from 'react';

function BlueLayout({ titleLayout, subtitleLayout, block1, block2 }) {

  return (
    <div className="container mt-5 mb-5 text-center block-dark">
      <h2 className="pt-5 pb-5">{titleLayout}</h2>

      <div className='subtitle-container d-flex justify-content-center'>
        <p className=" bg-slate-300">{subtitleLayout}</p>
      </div>

      <div className='row justify-center justify-content-around'>
        <div id="technology" className="col-xs-10 col-md-4 mt-5 mb-5 landing-blocks" data-aos="zoom-in" data-aos-duration="1500" >
          <button className="pt-5 pb-5" >{block2}</button>
        </div>
        <div id="projects" className="col-xs-10 col-md-4 mt-5 mb-5 landing-blocks" data-aos="zoom-in" data-aos-duration="1500" >
          <button className="pt-5 pb-5">{block1}</button>
        </div>
      </div>
    </div>
  );
}

export default BlueLayout;

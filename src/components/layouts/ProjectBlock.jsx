import React, { useState, useEffect, useRef } from 'react';

function MultipleBlocks({projectArray}) {

  const tech = Object.entries(projectArray);
  const results = [];

  tech.forEach(([element, infoArray]) => {
    const [style, image, title, url] = infoArray;
    
    results.push(
      <div key={element} className={`d-flex flex-wrap justify-content-around m-5 proj-block ${style}`} >
        <div className="p-2">
            <img className="image-tech" src={image} />
        </div>
        <div className="p-2 align-self-center block-text">
            <div className="p-2 title-tech">{title}</div>
            <a href={url} target="_blank" rel="repository">
                <button className="p-2 button-proj">Go to the repo!</button>
            </a>
        </div>
        </div>
    );
  })    
  
  return (
    <div>
      {results}
    </div>
  ) 
} 


export default MultipleBlocks;
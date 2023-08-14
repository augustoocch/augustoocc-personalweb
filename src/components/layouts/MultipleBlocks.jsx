import React, { useState, useEffect, useRef } from 'react';

function MultipleBlocks({techStack}) {

  const tech = Object.entries(techStack);
  const results = [];

  tech.forEach(([element, infoArray]) => {
    const [style, image, title, description] = infoArray;
    
    results.push(
      <div key={element} className={`d-flex flex-wrap justify-content-around ${style}`} >
        <div className="p-2">
          <img className="image-tech " src={image} />
        </div>
          <div className="p-2 align-self-center block-text">
            <div className="p-2 title-tech">{title}</div>
            <div className="p-2 subtitle-tech">{description}</div>
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
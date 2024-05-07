import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        <p style={{ fontFamily: 'Arial, Roboto' }}>{text2}</p>
      </span>
    </div>
  );
};

export default FloatinDiv;
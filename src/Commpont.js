import React from "react";
import "./site.css"

function Commpont(props){
    return(

        <div className={props.box}>
        <div className="image">
          <img src={props.image} className={`${props.style} ${props.box}`}></img>
        </div>

      <div className={`${props.descstyle} ${props.desccon} `}>
        <h1 className={props.head}>{props.name}</h1>
        <p className={props.para}>{props.note}</p>
        <button className={props.butsty}>{props.button} </button>
      </div>

       </div>
    );
}

export default Commpont;
import React from "react";
import "./site.css"

function Site(props){
    return(
       <div className={props.box}>
        <div className="imge">
          <img src={props.image} className={`${props.style} ${props.box}`}></img>
        </div>

      <div className={props.contstyle}>
        <h1 className={props.name}>{props.head} </h1>
        <p>{props.para}</p>
        <button className={props.buttonsty}>{props.button} </button>
      </div>

       </div>

    );
}
export default Site
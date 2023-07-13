import React from "react";

import "./my.css"
import Headerright from "./Headerright";
import Headerleft from "./Hedarleft";
function Header() {
    return(

        <div className="header"> 
        {/* <h1>Header</h1>  */}
        <Headerright/>
        <Headerleft/>
        </div>
    )
}




export default Header
import React from "react";

function Display(props){
    console.log(props)
           return(
        // <div  style={{textAlign:"center",color:"gray"}}>
        //     <label htmlFor="">Email : name@gmail.com </label>
        //     <br/>
        //     <label htmlFor="">password : **********</label>
        // </div>
        <React.Fragment>
            <div style={{textAlign:'center',color:'green'}}>
            <h1>Email:{emailprop}</h1>
            <h1>password:{passwordprop}</h1>
            </div>
        </React.Fragment>

    )
    }
    export default Display;


import React, { useState } from "react";
import Login from "./Login";
import Sinup from "./Sinup";
import "./login.css"

 
function App2(params) {
    const [state, setState] = useState(false);
    return(
 <div>
        <div className="buttons">
        <button
          onClick={function name(params) {
            setState(true);
          }}
        >
          LOGIN
        </button>
        <button
          onClick={function name(params) {
            setState(false);
          }}
        >
          SINGUP
        </button>
        </div>
        {state ? <Login/> : <Sinup/>}
   </div>
    )
}

export default App2;
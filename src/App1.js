import React ,{useState} from "react";

function App1(params) {
    let [state,setSatate]=useState(0);
  return(
    <div style={{textAlign:"center",color:"gray"}}>
        <h1>{state}</h1>
    <button
      onClick={
        function name(params) {
          setSatate(state+1)
        }
      }>Increment</button>    

<button
      onClick={
        function name(params) {
          if (state>0) {
            setSatate(state-1)   
          }
    
      
        }
        
      }>Increment
      </button>    
    
      </div>

    );
}

export default App1;
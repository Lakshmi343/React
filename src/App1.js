import React ,{useState} from "react";

function App1(params) {
    let [state,setSatate]=useState(0);
  return(
    <div>
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
          setSatate(state-1)
        }
      }>Increment</button>    

    
      </div>

    );
}

export default App1;
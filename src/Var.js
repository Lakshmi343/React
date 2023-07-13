import "./var.css"

function Var() {
   var status=false;
    return (

     <div>
    {
     status?
        //true
         <div id="first">
            <h1>gd mrng</h1>
        </div> :  
        //false 
        <div id="second">
            <h3>gf night</h3>
            </div>

    }
     </div>


    );
}

export default Var;
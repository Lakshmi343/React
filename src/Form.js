import React, { useState } from "react";
              
function Form(props){
   console.log(props);
     const {myfun} =props
     
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');

   const onclick = params=> {
    params.preventDefault();

    myfun(email,password);
 };

   

   const EMAIL= (params)=>{
    // console.log(params.target.value.length)
    setEmail(params.target.value)    
 }
   const PASSWORD = (params) => {
  //    console.log(params.target.value.length)
    setPassword(params.target.value)    
 }

    return(
       
  <div  style={{textAlign:"center",color:"gray"}}>

    <form onSubmit={onclick}>
    
    <input onChange={EMAIL} type="email" placeholder="email"/>
    <br/><br/>
    {
      email.length === 0 ? <span style={{color:'green'}}>This Filed Is Null</span> : ''
    }
    <br/>

    <input onChange={PASSWORD} type="password" placeholder="password"/>
    <br/>

    {
      password.length === 0 ? <span style={{color:'green'}}>This Filed Is Null</span> : ''
    }
    
<br/><br/>


    <input type="submit" placeholder="Submit"/>
    </form>
     {/* <div className=""><h3>Email :{email}</h3> </div>
    <div className=""><h3>password :{password}</h3> </div> */}
    </div>
    )
    }
    export default Form;
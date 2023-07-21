import React, {useState} from "react";
import Form from "./Form";
import Display from "./Display";

function Forms(){
    let [email,setEmail]=useState()
    let[password,setPassword]=useState()

    const getvalue=(emailvalue,passwordvalue)=>{
        setEmail(emailvalue)
        setPassword(passwordvalue)
        console.log (`email-id : ${emailvalue} \n \n password : ${passwordvalue} }`)
    }

    console.log(email,password,'state is here')

    return(
        <div>
            <Form myfun={getvalue}/>
            <Display  emailprop = {email} passwordprop= {password}/>
        </div>
    )
    }
    export default Forms;



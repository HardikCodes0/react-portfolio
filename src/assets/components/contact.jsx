import React from 'react'
import { useState } from 'react'

function Contactus(){
    const[forms , setForms]=useState({
        name:"",
        email:"",
        message:""
    })
    function handlechange(event){
        const name = event.target.name;
        const value = event.target.value;
    }
    return(
    <>

    </>
    )
}
import React, { useState } from 'react'
import { API_URL } from '../../data/apipath';

function VendorRegister() {
  var [username,setUserName] = useState("");
  var [email,setEmail] = useState("");
  var [password,setPassword] = useState("");


  const handlesubmit = async(e)=>{
    e.preventDefault()
    try{
      const responce = await fetch(`${API_URL}/vendor/Register`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({username,email,password})
      })
    }catch(error){

    }
  }


  return (
    <div className='vendorRegister'>
        <h3>Register Form</h3>
        <form>
        <h5>User Name</h5>
        <input type='text' name='username' value={username} placeholder='Enter your UserName'></input>
            <h5>Email</h5>
            <input type='text' name='text' value={email} placeholder='Enter your Email'></input>
            <h5>Password</h5>
            <input type='text' name='password' value={password} placeholder='Enter your Password'></input>
            <div className='btnsubmit'>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default VendorRegister;
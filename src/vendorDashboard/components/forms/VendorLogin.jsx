import React from 'react'

function VendorLogin() {
  return (
    <div className='vendorLogin'>
        <h3>Login Form</h3>
        <form>
            <h5>Email</h5>
            <input type='text' placeholder='Enter your Email'></input>
            <h5>Password</h5>
            <input type='text' placeholder='Enter your Password'></input>
            <div className='btnsubmit'>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default VendorLogin;
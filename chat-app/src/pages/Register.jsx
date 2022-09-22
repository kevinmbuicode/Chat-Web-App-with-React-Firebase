import React from 'react'
import addAvatar from '../images/addImage.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Web Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{ display: "none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src={addAvatar} alt="" height="30px" width="30px"/>
                    <span>Add an Avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register;
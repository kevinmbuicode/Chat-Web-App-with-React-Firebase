import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Web chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/6389849/pexels-photo-6389849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import inputIcons from '../images/addImage.png';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..."/>
      <div className="send">
        <img src={inputIcons} alt="" height="24px"/>
        <input type="file" style={{ display: "none"}} id="file"/>
        <label htmlFor="file">
          <img src={inputIcons} alt="" height="24px"/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input;
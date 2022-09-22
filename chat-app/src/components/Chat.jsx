import React from 'react'
import AddIcon from '../images/addImage.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={AddIcon} alt=""/>
          <img src={AddIcon} alt=""/>
          <img src={AddIcon} alt=""/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
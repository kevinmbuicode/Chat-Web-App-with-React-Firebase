import React from 'react'
import AddIcon from '../images/addImage.png'
import videoIcon2 from '../images/videoIcon.webp'
import voice from '../images/voice2.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={AddIcon} alt=""/>
          <img src={videoIcon2} alt=""/>
          <img src={voice} alt=""/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/9832430/pexels-photo-9832430.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img
          src="https://images.pexels.com/photos/9832430/pexels-photo-9832430.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Message;

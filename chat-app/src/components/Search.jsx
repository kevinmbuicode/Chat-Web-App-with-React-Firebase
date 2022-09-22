import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Search a user...'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/6777376/pexels-photo-6777376.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Search
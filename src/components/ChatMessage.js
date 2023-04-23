import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center">
        <img
          className="h-12 w-12 p-1 m-2 rounded-full border-2 border-black"
          alt="comment-profile"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
        <span className="font-bold text-lg m-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
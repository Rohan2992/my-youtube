import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../utils/chatSlice";
import { generateRandomNames, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  //API POLLING

  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const chatMessageData = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("API POLLING");
      dispatch(
        setMessages({
          name: generateRandomNames(),
          message: generateRandomMessage(20)
        })
      );
    }, 1500);

    return () => clearInterval(i);
    // eslint-disable-next-line
  }, []);

  return (
    <div className=" h-[498px] border-4 border-x-red-600 border-y-slate-950">
      <div className=" flex flex-col-reverse h-[450px]  mx-2 p-2 overflow-y-scroll">
        {chatMessageData.map(({ name, message }, i) => (
          <ChatMessage key={i} name={name} message={message} />
        ))}
      </div>
      <div className="w-full mx-8">
        <input
          className="w-3/4 px-2 py-1 border border-gray-600"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="mx-1.5 text-xl"
          onClick={() => {
            dispatch(setMessages({ name: "Rohan", message: text  }))
            setText("")
          }}
        >
          ⬆️
        </button>
      </div>
    </div>
  );
};

export default LiveChat;

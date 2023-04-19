import React from "react";
import { CommentsData } from "../utils/config";

const Comment = ({ name, text, replies }) => {
  return (
    <>
      <div className="flex bg-slate-200 rounded-lg my-4">
        <img
          className="h-14 w-14 p-1 m-2 rounded-full border-4 border-black"
          alt="comment-profile"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />

        <div className="p-2">
          <p className="font-bold">{name}</p>
          <p className="font-normal">{text}</p>
        </div>
      </div>
      <div className="border-l-2 border-gray-700 ml-24">
        <CommentList list={replies} />
      </div>
    </>
  );
};

const CommentList = ({ list }) => {
  return (
    <div>
      {list.map((data, index) => (
        <Comment key={index} {...data} />
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <>
      <h1 className="">Comments :</h1>
      <CommentList list={CommentsData} />
    </>
  );
};

export default CommentsContainer;

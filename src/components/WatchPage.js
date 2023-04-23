import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu, closeMenu } from "../utils/toggleSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [urlParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());

    return () => dispatch(openMenu());
  });

  return (
    <div className="ml-10 my-2 p-2 w-full">
      <div className="flex">
        <div>
          <iframe
            width="1000"
            height="498"
            src={"https://www.youtube.com/embed/" + urlParams.get("v")}
            title="Unstoppable- Dino James [Official Music Video]"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-[498px] w-full mx-2">
          <LiveChat />
        </div>
      </div>
      <div className="mt-4 mx-4 font-bold">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;

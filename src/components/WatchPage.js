import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/toggleSlice";

const WatchPage = () => {
  const [urlParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="ml-20 my-8 p-2">
      <iframe
        width="885"
        height="498"
        src={"https://www.youtube.com/embed/" + urlParams.get("v")}
        title="Unstoppable- Dino James [Official Music Video]"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;

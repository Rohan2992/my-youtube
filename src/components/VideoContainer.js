import React, { useState, useEffect } from "react";
// import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API;
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  });

  console.log(YOUTUBE_API);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json);
    setVideo(json.items);
  };

  return videos.length === 0 ? null : (
    <div className="flex flex-wrap">
      {videos.map((video, index) => {
        return <VideoCard key={index} video={video} />;
      })}
    </div>
  );
};

export default VideoContainer;

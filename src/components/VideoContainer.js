import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
  // const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API;
  const YOUTUBE_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCzqiE8E7hgB7_2mHfWzzninsMEDCjH4k0";
  const [videos, setVideo] = useState([]);

  // const videoList = useSelector((store) => store.search);
  // console.log(videoList);

  useEffect(() => {
    getVideos();
  }, []);

  // useEffect(() => {
  //   setVideo(videoList);
  // }, [videos]);

  // console.log(YOUTUBE_API);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json);
    setVideo(json.items);
  };

  return videos.length === 0 ? null : (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard key={999} info={videos[0]} />}
      {videos.map((video, index) => {
        return <VideoCard key={index} video={video} />;
      })}
    </div>
  );
};

export default VideoContainer;

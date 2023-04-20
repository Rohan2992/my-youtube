import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { AdVideoCard } from "./VideoCard";
import { setVideos } from "../utils/searchSuggestionsSlice";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
  const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API;
  const dispatch = useDispatch();
  const videosList = useSelector((store) => store.searchSuggestions.videos);

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    dispatch(setVideos(json.items));
  };

  return videosList.length === 0 ? null : (
    <div className="flex flex-wrap">
      {videosList[0] && <AdVideoCard key={999} info={videosList[0]} />}
      {videosList.map((video, index) => {
        return <VideoCard key={index} video={video} />;
      })}
    </div>
  );
};

export default VideoContainer;

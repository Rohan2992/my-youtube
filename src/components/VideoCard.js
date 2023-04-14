import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={"/watch?v=" + video.id}>
      <div className="mx-4 my-4 p-2 h-96 w-72 rounded-lg shadow-lg">
        <img
          className="w-full"
          alt="poster-img"
          src={video?.snippet?.thumbnails?.high?.url}
        />
        <h1 className="font-bold mt-4">{video?.snippet?.localized?.title}</h1>
        <p>{video?.statistics?.likeCount} Likes</p>
        <p>{video?.statistics?.viewCount} Views</p>
      </div>
    </Link>
  );
};

export default VideoCard;

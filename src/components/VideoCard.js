import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link
      className="m-4 p-4 max-h-max w-72 rounded-lg shadow-lg"
      key={video.id}
      to={"/watch?v=" + video.id}
    >
      <div className="m-0.5">
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

export const AdVideoCard = ({ info }) => {
  return (
    <div className="m-4 p-2 h-96 w-72 rounded-lg shadow-lg  border-x-red-600 border-4 border-y-black">
      <span className="m-2 p-2 font-bold">Advertisement:</span>
      <VideoCard video={info} />
    </div>
  );
};

export default VideoCard;

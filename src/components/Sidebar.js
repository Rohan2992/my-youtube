import React from "react";
import ListItems from "./SidebarListItems";

import { useSelector } from "react-redux";
const listItemsArray = [
  { name: "Home", symbol: "home" },
  { name: "Explore", symbol: "explore" },
  { name: "Shorts", symbol: "movie" },
  { name: "Subscriptions", symbol: "subscriptions" },
  { name: "Library", symbol: "video_library" },
  { name: "History", symbol: "history" },
  { name: "Your videos", symbol: "slideshow" },
  { name: "Watch Later", symbol: "watch_later" },
  { name: "Liked videos", symbol: "thumb_up" },
  { name: "Settings", symbol: "settings" },
  { name: "Report", symbol: "report" },
  { name: "Help", symbol: "help" },
  { name: "Feedback", symbol: "feedback" }
];

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-2 m-2 w-44 shadow-lg">
      <ul>
        <ListItems list={listItemsArray} />
      </ul>
    </div>
  );
};

export default Sidebar;

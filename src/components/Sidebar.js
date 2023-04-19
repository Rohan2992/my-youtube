import React from "react";
import SidebarListItems from "./SidebarListItems";

import { useSelector } from "react-redux";
const listItemsArray = [
  { id: 1, name: "Home", symbol: "home" },
  { id: 2, name: "Explore", symbol: "explore" },
  { id: 3, name: "Shorts", symbol: "movie" },
  { id: 4, name: "Subscriptions", symbol: "subscriptions" },
  { id: 5, name: "Library", symbol: "video_library" },
  { id: 6, name: "History", symbol: "history" },
  { id: 7, name: "Your videos", symbol: "slideshow" },
  { id: 8, name: "Watch Later", symbol: "watch_later" },
  { id: 9, name: "Liked videos", symbol: "thumb_up" },
  { id: 10, name: "Settings", symbol: "settings" },
  { id: 11, name: "Report", symbol: "report" },
  { id: 12, name: "Help", symbol: "help" },
  { id: 13, name: "Feedback", symbol: "feedback" }
];

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-2 m-2 w-44 shadow-lg">
      <ul>
        <SidebarListItems list={listItemsArray} />
      </ul>
    </div>
  );
};

export default Sidebar;

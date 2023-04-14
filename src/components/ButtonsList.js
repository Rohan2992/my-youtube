import React from "react";

const buttonsListArr = [
  "All",
  "Gaming",
  "Mixes",
  "Live",
  "Computer",
  "Drifting",
  "Cristiano Ronaldo",
  "Music",
  "Live Streaming",
  "Chess"
];

const ButtonsList = () => {
  return (
    <div>
      <ul className="flex">
        {buttonsListArr.map((item, index) => (
          <li key={index} className="p-2 m-2 bg-gray-300 rounded-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonsList;

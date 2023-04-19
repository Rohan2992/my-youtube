import React from "react";

const SidebarListItems = ({ list }) => {
  return list.map((item, index) => {
    return (
      <div key={item.id}>
        {item.name === "Home" ? (
          <a href="/">
            <li className="flex mx-2 my-2.5 font-semibold text-red-600">
              <span className="material-icons text-gray-800 mr-2">
                {item?.symbol}
              </span>
              {item?.name}
            </li>
          </a>
        ) : (
          <li className="flex mx-2 my-2.5 font-semibold text-red-600">
            <span className="material-icons text-gray-800 mr-2">
              {item?.symbol}
            </span>
            {item?.name}
          </li>
        )}
        <hr />
      </div>
    );
  });
};

export default SidebarListItems;

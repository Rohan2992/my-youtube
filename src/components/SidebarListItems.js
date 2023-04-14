import React from "react";

const ListItems = ({ list }) => {
  return list.map((item, index) => {
    return (
      <>
        {item.name === "Home" ? (
          <a href="/" key={index}>
            <li
              key={index}
              className="flex mx-2 my-2.5 font-semibold text-red-600"
            >
              <span className="material-icons text-gray-800 mr-2">
                {item?.symbol}
              </span>
              {item?.name}
            </li>
          </a>
        ) : (
          <li
            key={index}
            className="flex mx-2 my-2.5 font-semibold text-red-600"
          >
            <span className="material-icons text-gray-800 mr-2">
              {item?.symbol}
            </span>
            {item?.name}
          </li>
        )}
        <hr />
      </>
    );
  });
};

export default ListItems;

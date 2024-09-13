/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SubMenuItem = ({ item, isActive, onClick, hoverColorClass }) => {
  return (
    <a
      href="#"
      className={`block py-2 px-4 rounded transition ${
        isActive ? "bg-gray-400 text-white" : ""
      } ${hoverColorClass}`}
      onClick={onClick}
    >
      {item}
    </a>
  );
};

export default SubMenuItem;

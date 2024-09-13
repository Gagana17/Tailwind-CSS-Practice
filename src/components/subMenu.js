/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import SubMenuItem from "./SubMenuItem"; // Import the updated SubMenuItem component

const SubMenu = () => {
  const [active, setActive] = useState("");

  const handleClick = (item) => {
    setActive(item);
  };

  // List of submenu items with their corresponding Tailwind hover classes
  const menuItems = [
    { name: "Forms", hoverColorClass: "hover:bg-red-400" },
    { name: "Navigation", hoverColorClass: "hover:bg-blue-400" },
    { name: "Buttons", hoverColorClass: "hover:bg-yellow-400" },
    { name: "Content", hoverColorClass: "hover:bg-green-400" },
    { name: "Mobile", hoverColorClass: "hover:bg-purple-400" },
    { name: "Wireframes", hoverColorClass: "hover:bg-orange-400" },
    { name: "Thinking", hoverColorClass: "hover:bg-pink-400" },
    { name: "Sponsors", hoverColorClass: "hover:bg-teal-400" },
    { name: "Products", hoverColorClass: "hover:bg-gray-400" },
  ];

  return (
    <nav className="bg-white py-1 shadow">
      <div className="container mx-auto flex justify-start items-center px-20">
        {menuItems.map((item) => (
          <SubMenuItem
            key={item.name}
            item={item.name}
            isActive={active === item.name}
            onClick={() => handleClick(item.name)}
            hoverColorClass={item.hoverColorClass}
          />
        ))}
      </div>
    </nav>
  );
};

export default SubMenu;

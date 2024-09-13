/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);

  // Links data
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Sponsorship", href: "#" },
    { name: "Contact", href: "#" },
  ];

  // Handle link click to set active link
  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  return (
    <header className="bg-sky-950 text-white shadow-md">
      <div className="container mx-auto flex justify-start items-center py-2 px-20">
        {/* Navigation Links */}
        <nav className="flex space-x-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`px-2 py-1 rounded ${
                activeLink === link.name
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-400 hover:text-white transition-colors duration-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

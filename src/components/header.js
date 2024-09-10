/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const header = () => {
  return (
    <header className="bg-sky-950 text-sky-200 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover color: green ">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Sponsorship
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default header;

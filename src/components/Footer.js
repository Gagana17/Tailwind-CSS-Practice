import React from "react";
import { Twitter, Rss } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Follow UX Movement</h3>
          <div className="flex space-x-2">
            <a href="#" className="bg-blue-400 p-2 rounded-md">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-orange-500 p-2 rounded-md">
              <Rss size={20} />
            </a>
          </div>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Sponsorship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Topics</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-300">
                Buttons (62)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Content (68)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Forms (128)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Mobile (46)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Navigation (59)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Products (11)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Sponsors (53)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Thinking (34)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Wireframes (13)
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">
            Looking for an article?
          </h3>
          <div className="flex">
            <input
              type="search"
              placeholder="Search..."
              className="p-2 rounded-l-md w-full text-black"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-md">
              Search
            </button>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">About UX Movement</h3>
            <p className="text-sm">
              A user experience design publication dedicated to teaching people
              how to make interfaces more intuitive and easier to use.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        &copy; Copyright UX Movement. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

const sideBar = () => {
  return (
    <aside className="w-full lg:w-1/4 lg:ml-8 bg-white p-6 shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Popular of All-Time</h3>
      <ul className="space-y-4">
        <li>
          <a href="#" className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/60"
              alt="Thumbnail"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h4 className="text-sm font-bold">
                Why Users Fill Out Forms Faster with Top Aligned Labels
              </h4>
              <div className="text-xs text-gray-500">September 1, 2010</div>
            </div>
          </a>
        </li>
        {/* Repeat similar list items for other popular posts */}
      </ul>
    </aside>
  );
};

export default sideBar;

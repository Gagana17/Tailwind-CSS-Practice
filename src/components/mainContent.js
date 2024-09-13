import React from "react";

const mainContent = () => {
  return (
    <main className="flex-1 bg-white p-6 shadow rounded-lg mb-8 lg:mb-0">
      <article>
        <img src="/post.png" alt="Article" className="w-full mb-4 rounded-lg" />
        <span className="text-xs bg-purple-600 text-white py-1 px-2 rounded-full mb-4 inline-block">
          NAVIGATION
        </span>

        <h2 className="text-xl font-bold mb-2">
          How to Handle Large-Scale Item Groups in a Sidebar
        </h2>

        <div className="text-sm text-gray-500 mb-4">
          August 27, 2024 | anthony | 0 Comments
        </div>
      </article>
    </main>
  );
};

export default mainContent;

import React from "react";
import { User } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/4 lg:ml-8 bg-white p-6 shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Popular of All-Time</h3>
      <ul className="space-y-4">
        {popularPosts.map((post, index) => (
          <li key={index}>
            <a href="#" className="flex items-center space-x-3">
              <img
                src={`/api/placeholder/60/60`}
                alt="Thumbnail"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="text-sm font-bold">{post.title}</h4>
                <div className="text-xs text-gray-500">{post.date}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-8 mb-4">Recent Comments</h3>
      <ul className="space-y-4">
        {recentComments.map((comment, index) => (
          <li key={index} className="flex items-start space-x-3">
            <User className="w-8 h-8 text-gray-400" />
            <div>
              <span className="font-bold text-sm">{comment.author}: </span>
              <span className="text-sm">{comment.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const popularPosts = [
  {
    title: "Why Users Fill Out Forms Faster with Top Aligned Labels",
    date: "September 1, 2010",
  },
  {
    title: "Why Your Form Buttons Should Never Say 'Submit'",
    date: "January 5, 2011",
  },
  {
    title: "Why 'Ok' Buttons in Dialog Boxes Work Best on the Right",
    date: "May 25, 2011",
  },
  {
    title: "Why You Should Never Use Pure Black for Text or Backgrounds",
    date: "May 8, 2018",
  },
  {
    title: "Why Left Search Buttons Perform Faster Than Right Ones",
    date: "November 11, 2010",
  },
  {
    title: "Interface Libraries 3: Wireframe Like a Professional",
    date: "June 17, 2012",
  },
  {
    title: "Why Hover Menus Do Users More Harm Than Good",
    date: "March 1, 2011",
  },
  {
    title: "Why External Links Should Open in New Tabs",
    date: "January 31, 2012",
  },
  {
    title: "6 Surprising Bad Practices That Hurt Dyslexic Users",
    date: "January 23, 2011",
  },
  {
    title: "When to Use White Text on a Dark Background",
    date: "April 28, 2011",
  },
];

const recentComments = [
  {
    author: "MGK",
    text: "When we read the focus is primarily on the left...",
  },
  {
    author: "Allan",
    text: "Article says can make it easy because a full name...",
  },
  {
    author: "Kishor Jana",
    text: "The article makes some good points! However, I think it...",
  },
];

export default Sidebar;

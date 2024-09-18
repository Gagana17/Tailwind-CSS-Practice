import React from "react";
import { Calendar, User } from "lucide-react";

const ArticleCard = ({
  category,
  title,
  date,
  author,
  comments,
  excerpt,
  image,
  isLarge,
}) => (
  <div
    className={`bg-white rounded-lg shadow-md overflow-hidden ${
      isLarge ? "col-span-2" : ""
    }`}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4 space-y-2">
      <span
        className={`text-white text-xs font-semibold px-2 py-1 rounded ${
          category === "NAVIGATION"
            ? "bg-purple-600"
            : category === "FORMS"
            ? "bg-red-600"
            : "bg-gray-600"
        }`}
      >
        {category}
      </span>
      <h3 className={`font-bold ${isLarge ? "text-2xl" : "text-lg"}`}>
        {title}
      </h3>
      <div className="flex items-center text-gray-500 text-xs space-x-4">
        <div className="flex items-center">
          <Calendar size={12} className="mr-1" />
          {date}
        </div>
        {author && (
          <div className="flex items-center">
            <User size={12} className="mr-1" />
            {author}
          </div>
        )}
        <div>{comments} Comments</div>
      </div>
      {excerpt && <p className="text-sm text-gray-600">{excerpt}</p>}
    </div>
  </div>
);

const ArticleLayout = () => {
  const articles = [
    {
      category: "NAVIGATION",
      title: "How to Handle Large-Scale Item Groups in a Sidebar",
      date: "August 27, 2024",
      author: "anthony",
      comments: 0,
      image: "/api/placeholder/800/400",
      isLarge: true,
    },
    {
      category: "NAVIGATION",
      title: "A Better Approach to Multi-Level Sidebar Navigation",
      date: "August 26, 2024",
      comments: 0,
      excerpt:
        "Designers must stop using multi-level sidebar navigation. Grouping many items and subitems together in a...",
      image: "/api/placeholder/400/300",
    },
    {
      category: "FORMS",
      title: "The Best Location for Navigation Items on Web Apps",
      date: "August 19, 2024",
      comments: 0,
      excerpt:
        "There's a reason most websites use a top navigation bar. On a website, content is...",
      image: "/api/placeholder/400/300",
    },
    {
      category: "NAVIGATION",
      title: "How to Design a Smart Search Bar Experience",
      date: "June 20, 2024",
      comments: 0,
      excerpt:
        "Website search bars have a serious problem. Research has found that 69% of users go...",
      image: "/api/placeholder/400/300",
    },
    {
      category: "FORMS",
      title: "How to Simplify a Massive Form With Over 100 Fields",
      date: "April 4, 2024",
      comments: 0,
      excerpt:
        "There are long forms, and then there are massive forms. A form with over a...",
      image: "/api/placeholder/400/300",
    },
    {
      category: "SPONSORS",
      title: "Zuko Form Builder: Build Forms with High Conversion Rates",
      date: "March 5, 2024",
      comments: 0,
      excerpt:
        "80% of users have abandoned an online form after beginning to fill it out (source)...",
      image: "/api/placeholder/400/300",
    },
    {
      category: "FORMS",
      title: "How to Make Users Fill Out the Longest 13 Field Form",
      date: "February 16, 2024",
      comments: 0,
      excerpt:
        "Many websites attract users to their home page but lose them on the form. Low...",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 p-6">
      <div className="grid grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleLayout;

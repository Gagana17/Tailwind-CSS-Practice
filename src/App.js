// src/App.js
import React from "react";
import Header from "./components/header";
import SubMenu from "./components/subMenu";
import MainContent from "./components/mainContent";
import Sidebar from "./components/sideBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SubMenu />
      <div className="container mx-auto mt-8 flex flex-col lg:flex-row px-4">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

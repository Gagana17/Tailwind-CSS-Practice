import React from "react";
import Header from "./components/Header";
import SubMenu from "./components/SubMenu";
import Sidebar from "./components/Sidebar";
import LogoBanner from "./components/LogoBanner";
import Footer from "./components/Footer";
import "./styles/tailwind.css";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <LogoBanner />
      <SubMenu />

      <div className="container mx-auto flex-grow flex mt-8">
        <MainContent />

        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;

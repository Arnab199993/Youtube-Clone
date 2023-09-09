import React from "react";
import "./Home.css";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import Navbar from "../../Component/Navbar/Navbar";
const Home = () => {
  return (
    <>
      <div className="container-pages-app">
        <LeftSidebar />
        <div style={{ color: "white" }} className="container2-pages-app">
          Home
        </div>
      </div>
    </>
  );
};

export default Home;

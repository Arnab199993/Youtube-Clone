import React from "react";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import Navbar from "../../Component/Navbar/Navbar";
import "./Explore.css";
import DrawSidebar from "../../Component/LeftSidebar/DrawSidebar";
const Explore = () => {
  return (
    <>
    <div className="container-pages-app">
      <LeftSidebar />
      <div style={{ color: "white" }} className="container2-pages-app">
        Explore
      </div>
    </div>
  </>
  );
};

export default Explore;

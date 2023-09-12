import React from "react";
import "./Home.css";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Component/ShowVideoGrid/ShowVideoGrid";
import { useNavigate } from "react-router-dom";
const Home = () => {
 
  return (
    <>
      <div className="container-pages-app">
        <LeftSidebar />
        <div style={{ color: "white" }} className="container2-pages-app">
          <ShowVideoGrid/>
        </div>
      </div>
    </>
  );
};

export default Home;

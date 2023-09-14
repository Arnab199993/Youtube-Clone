import React from "react";
import "./Home.css";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Component/ShowVideoGrid/ShowVideoGrid";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navList=[
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
  ]
  return (
    <>
      <div className="container-pages-app">
        <LeftSidebar />
        <div style={{ color: "white" }} className="container2-pages-app">
          <div className="navigation_Home">
            {navList.map((item,i)=>(
              <div key={i}>
                <p className="btn_nav_nome">{item}</p>
              </div>
            ))}
          </div>
          <ShowVideoGrid/>
        </div>
      </div>
    </>
  );
};

export default Home;

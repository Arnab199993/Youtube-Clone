import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import DrawSidebar from "../../Component/LeftSidebar/DrawSidebar";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Component/ShowVideoGrid/ShowVideoGrid";

const YourVideos = () => {
  const [toggleDrawerSideBar, settoggleDrawerSideBar] = useState(false);
  const toggleBtn = () => {
    settoggleDrawerSideBar(!toggleDrawerSideBar);
  };
  return (
    <>
      <Navbar toggleBtn={toggleBtn} />
      <DrawSidebar
        toggleDrawerSideBar={toggleDrawerSideBar}
        settoggleDrawerSideBar={settoggleDrawerSideBar}
        toggleBtn={toggleBtn}
      />
      <div className="container-pages-app">
        <LeftSidebar />
        <div className="container2-pages-app">
          <div style={{color:"white",padding:"0.5rem"}} className="Container_Your_videos">
          <h1 style={{marginLeft:'1.5rem'}}>Your Videos</h1>
          <ShowVideoGrid />
        </div>
          
        </div>
      </div>
    </>
  );
};

export default YourVideos;

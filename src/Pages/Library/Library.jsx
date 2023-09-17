import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import DrawSidebar from "../../Component/LeftSidebar/DrawSidebar";
import { UseContextAPi } from "../../Component/Context/Context";
import "./Library.css"
const Library = () => {
  const [toggleDrawerSideBar, settoggleDrawerSideBar] = useState(false);
  const toggleBtn = () => {
    settoggleDrawerSideBar(!toggleDrawerSideBar);
  };
  const Videos=UseContextAPi()
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
          <div
            
            className="Container_LibraryPage"
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;

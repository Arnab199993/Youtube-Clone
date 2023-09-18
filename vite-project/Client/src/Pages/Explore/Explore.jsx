import React, { useState } from "react";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import Navbar from "../../Component/Navbar/Navbar";
import "./Explore.css";
import DrawSidebar from "../../Component/LeftSidebar/DrawSidebar";
const Explore = () => {
  const [toggleDrawerSideBar, settoggleDrawerSideBar] = useState(false);
  const toggleBtn = () => {
    settoggleDrawerSideBar(!toggleDrawerSideBar);
  };
  return (
    <>
    <div>
      <Navbar toggleBtn={toggleBtn}/>
      <DrawSidebar
          toggleDrawerSideBar={toggleDrawerSideBar}
          settoggleDrawerSideBar={settoggleDrawerSideBar}
          toggleBtn={toggleBtn}
        />
        <LeftSidebar/>
    </div>
  </>
  );
};

export default Explore;

import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import DrawSidebar from "../../Component/LeftSidebar/DrawSidebar";

const Library = () => {
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
      <LeftSidebar />
    </>
  );
};

export default Library;

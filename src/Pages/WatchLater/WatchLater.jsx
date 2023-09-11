import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import DrawSidebar from '../../Component/LeftSidebar/DrawSidebar';
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar';

const WatchLater = () => {
  const [toggleDrawerSideBar, settoggleDrawerSideBar] = useState(false);
  const toggleBtn = () => {
    settoggleDrawerSideBar(!toggleDrawerSideBar);
  };
  return (
    <>
      <div>
        <Navbar toggleBtn={toggleBtn} />
        <DrawSidebar
          toggleDrawerSideBar={toggleDrawerSideBar}
          settoggleDrawerSideBar={settoggleDrawerSideBar}
          toggleBtn={toggleBtn}
        />
        <LeftSidebar />
      </div>
      ;
    </>
  )
}

export default WatchLater
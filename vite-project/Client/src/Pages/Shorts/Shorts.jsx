import React, { useState } from 'react'
import DrawSidebar from '../../Component/LeftSidebar/DrawSidebar';
import Navbar from '../../Component/Navbar/Navbar';
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar';

const Shorts = () => {
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
  )
}

export default Shorts
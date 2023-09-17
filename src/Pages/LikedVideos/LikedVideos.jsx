import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import DrawSidebar from '../../Component/LeftSidebar/DrawSidebar';
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar';
import WHL from '../../Component/WHL/WHL';
import istockphoto from "../../../public/istockphoto-1324924021-640_adpp_is.mp4"
const LikedVideos = () => {
  const [toggleDrawerSideBar, settoggleDrawerSideBar] = useState(false);
  const toggleBtn = () => {
    settoggleDrawerSideBar(!toggleDrawerSideBar);
  };
  const Likes=[
    {
      id:1,
      video_src:istockphoto,
      channel:"62bafe6752cea35a6c30695f",
      uploader:"abc",
      title:"video 1",
      description:"Description of video 1"
    },
    {
      id:2,
      video_src:istockphoto,
      channel:"cdd",
      uploader:"abc",
      title:"video 2",
      description:"Description of video 2"
    },
    {
      id:3,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:4,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:5,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:6,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:7,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:8,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    }
     
  ]
  return (
    <>
    <div>
      <div className="container-pages-app">
        <div className="bdy_cont_2">
          <Navbar toggleBtn={toggleBtn} />
          <DrawSidebar
            toggleDrawerSideBar={toggleDrawerSideBar}
            settoggleDrawerSideBar={settoggleDrawerSideBar}
            toggleBtn={toggleBtn}
          />
          <div className="body_cont">
            <LeftSidebar />
            <div className="History_Body">
              <WHL Page={"Liked Video"} VideoList={Likes} />
            </div>
          </div>
        </div>
      </div>
    </div>
    ;
  </>
  )
}

export default LikedVideos
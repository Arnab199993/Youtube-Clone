import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import DrawSidebar from "../../Component/LeftSidebar/DrawSidebar";
import { UseContextAPi } from "../../Component/Context/Context";
import istockphoto from "../../../public/istockphoto-1324924021-640_adpp_is.mp4"
import "./Library.css";
import { FaHistory } from "react-icons/fa";
import WHLVideoLIst from "../../Component/WHL/WHLVideoLIst";
import ShowVideoList from "../../Component/SHowVideoList/ShowVideoList";
import { MdOutlineWatch, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
const Library = () => {
  const [toggleDrawerSideBar, settoggleDrawerSideBar] = useState(false);
  const toggleBtn = () => {
    settoggleDrawerSideBar(!toggleDrawerSideBar);
  };
  const VideoList = [
    {
      id: 1,
      video_src: istockphoto,
      channel: "62bafe6752cea35a6c30695f",
      uploader: "abc",
      title: "video 1",
      description: "Description of video 1",
    },
    {
      id: 2,
      video_src: istockphoto,
      channel: "cdd",
      uploader: "abc",
      title: "video 2",
      description: "Description of video 2",
    },
    {
      id: 3,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 4,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 5,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 6,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 7,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 8,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 9,
      video_src: istockphoto,
      channel: "62bafe6752cea35a6c30695f",
      uploader: "abc",
      title: "video 1",
      description: "Description of video 1",
    },
    {
      id: 10,
      video_src: istockphoto,
      channel: "cdd",
      uploader: "abc",
      title: "video 2",
      description: "Description of video 2",
    },
    {
      id: 11,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 12,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 13,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 14,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 15,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 16,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
  ];
  return (
    <>
      <div>
        <Navbar toggleBtn={toggleBtn} />
        <DrawSidebar
          toggleDrawerSideBar={toggleDrawerSideBar}
          settoggleDrawerSideBar={settoggleDrawerSideBar}
          toggleBtn={toggleBtn}
        />
        <div className="container-pages-app">
          <LeftSidebar />
          <div className="container2-pages-app">
            <div className="Container_LibraryPage">
              <div className="container2_libraryPage">
                <h1 className="titleContainerLibraryPage">
                  <b>
                    <FaHistory />
                  </b>
                  <b>History</b>
                </h1>
                <div className="Container_video_List_Library_Page">
                  {/* <WHLVideoLIst Page={"History"} VideoList={Videos} /> */}
                    {VideoList.map((ele) => (
                      <div key={ele.id}>
                        <ShowVideoList videoId={ele.id} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="Container_LibraryPage">
              <div className="container2_libraryPage">
                <h1 className="titleContainerLibraryPage">
                  <b>
                    <MdOutlineWatchLater />
                  </b>
                  <b>Watch Later</b>
                </h1>
                <div className="Container_video_List_Library_Page">
                  {/* <WHLVideoLIst Page={"History"} VideoList={Videos} /> */}
                    {VideoList.map((ele) => (
                      <div key={ele.id}>
                        <ShowVideoList videoId={ele.id} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="Container_LibraryPage">
              <div className="container2_libraryPage">
                <h1 className="titleContainerLibraryPage">
                  <b>
                    <AiOutlineLike />
                  </b>
                  <b>Liked Videos</b>
                </h1>
                <div className="Container_video_List_Library_Page">
                    {VideoList.map((ele) => (
                      <div key={ele.id}>
                        <ShowVideoList videoId={ele.id} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;

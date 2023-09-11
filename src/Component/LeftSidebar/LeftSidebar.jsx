import React from "react";
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore} from "react-icons/md"
import {MdOutlineSubscriptions,MdOutlineVideoLibrary} from "react-icons/md"
import Shorts from "../../../public/youtube-shorts-logo.png";
import "./Leftbar.css"
import { Link } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <div className="cont-leftsidebar">
      <Link style={{textDecoration:"none"}} to={"/"}>
      <div className="icon-sidebar-div">
        <AiOutlineHome className="icon-sidebar" size={22}/>
        <div className="text-sidebar-icon">
            Home
        </div>
      </div>
      </Link>
      <Link style={{textDecoration:"none"}} to={"/explore"}>
      <div className="icon-sidebar-div">
        <MdOutlineExplore className="icon-sidebar" size={22}/>
        <div className="text-sidebar-icon">
            Explore
        </div>
      </div>
      </Link>
      <Link style={{textDecoration:"none"}} to={"/shorts"}>
      <div className="icon-sidebar-div">
        {/* <MdOutlineExplore className="icon-sidebar" size={22}/> */}
        <span>
                <img
                  src={Shorts}
                  className="icon_sidebar"
                  size={22}
                  style={{
                    margin: "auto 1.2rem",
                    filter:
                      "invert(100%) sepia(16%) saturate(7463%) hue-rotate(222deg) brightness(119%) contrast(115%)",
                  }}
                />
                <div className="text-sidebar-icon">Shorts</div>
              </span>
      </div>
      </Link>
      <Link style={{textDecoration:"none"}} to={"/subscription"}>
      <div className="icon-sidebar-div">
        <MdOutlineSubscriptions className="icon-sidebar" size={22}/>
        <div className="text-sidebar-icon">
            Subsription
        </div>
      </div>
      </Link>
      <Link style={{textDecoration:"none"}} to={"/library"}>
      <div className="icon-sidebar-div">
        <MdOutlineVideoLibrary className="icon-sidebar" size={22}/>
        <div className="text-sidebar-icon">
            Library
        </div>
      </div>
      </Link>
    </div>
  );
};

export default LeftSidebar;

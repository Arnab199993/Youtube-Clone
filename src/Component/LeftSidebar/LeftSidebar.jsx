import React from "react";
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore} from "react-icons/md"
import {MdOutlineSubscriptions,MdOutlineVideoLibrary} from "react-icons/md"
import "./Leftbar.css"
import { NavLink } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <div className="cont-leftsidebar">
      <NavLink style={{textDecoration:"none"}} to={"/"}>
      <div className="icon-sidebar-div">
        <AiOutlineHome className="icon-sidebar" size={22}/>
        <div className="text-sidebar-icon">
            Home
        </div>
      </div>
      </NavLink>
      <NavLink style={{textDecoration:"none"}} to={"/explore"}>
      <div className="icon-sidebar-div">
        <MdOutlineExplore className="icon-sidebar" size={22}/>
        <div className="text-sidebar-icon">
            Explore
        </div>
      </div>
      </NavLink>
      <NavLink style={{textDecoration:"none"}} to={"/subscription"}>
      <div className="icon-sidebar-div">
        <MdOutlineSubscriptions className="icon-sidebar" size={22}/>
        <div className="text-sidebar-icon">
            Subsription
        </div>
      </div>
      </NavLink>
      <NavLink style={{textDecoration:"none"}} to={"/library"}>
      <div className="icon-sidebar-div">
        <MdOutlineVideoLibrary className="icon-sidebar" size={22}/>
        <div className="text-sidebar-icon">
            Library
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export default LeftSidebar;

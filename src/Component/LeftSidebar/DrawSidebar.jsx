import React from "react";
import "./Leftbar.css";
import { AiOutlineHome } from "react-icons/ai";
import {FaHistory} from "react-icons/fa"
import { AiFillPlaySquare,AiFillLike } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdWatchLater
} from "react-icons/md";
import Shorts from "../../../public/youtube-shorts-logo.png";
import { Link, NavLink } from "react-router-dom";
const DrawSidebar = ({toggleDrawerSideBar,toggleBtn}) => {
  return (
    <>
      <div style={{toggleDrawerSideBar}} className="container-drawer-left-sidebar">
        {toggleDrawerSideBar?(<>
            <div className="container2-to-drawer-left-sidebar">
          <div className="drawerLeftSidebar">
            <div className="iconSidebarDiv">
              <NavLink to={"/"}>
              <p>
                <AiOutlineHome
                  className="icon_sidebar"
                  size={22}
                  style={{ color: "white", margin: "auto 0.7rem" }}
                />
                <div className="text-sidebar-icon">
                    Home
                </div>
              </p>
              </NavLink>
            </div>
            <div className="iconSidebarDiv">
              <NavLink to={"/explore"}>
              <p>
                <MdOutlineExplore
                  className="icon_sidebar"
                  size={22}
                  style={{ color: "white", margin: "auto 0.7rem" }}
                />
                <div className="text-sidebar-icon">Explore</div>
              </p>
              </NavLink>
            </div>
            <Link to={"/shorts"} className="iconSidebarDiv">
              <p>
                <img
                  src={Shorts}
                  className="icon_sidebar"
                  size={22}
                  style={{
                    margin: "auto 0.7rem",
                    filter:
                      "invert(100%) sepia(16%) saturate(7463%) hue-rotate(222deg) brightness(119%) contrast(115%)",
                  }}
                />
                <div className="text-sidebar-icon">Shorts</div>
              </p>
            </Link>
            <Link to={"/subscription"} className="iconSidebarDiv">
              <p>
                <MdSubscriptions
                  className="icon_sidebar"
                  size={22}
                  style={{ color: "white", margin: "auto 0.7rem" }}
                />
                <div className="text-sidebar-icon">Subscription</div>
              </p>
            </Link>
          </div>
          <div className="librarybtnleftsidebar">
            <div className="iconSidebarDiv">
              <NavLink to={"/library"}>
              <p>
                <MdOutlineVideoLibrary
                  className="icon_sidebar"
                  size={22}
                  style={{ color: "white", margin: "auto 0.7rem" }}
                />
                <div className="text-sidebar-icon">Library</div>
              </p>
              </NavLink>
            </div>
            <Link to={"/history"} className="iconSidebarDiv">
              <p>
                <FaHistory
                  className="icon_sidebar"
                  size={22}
                  style={{ color: "white", margin: "auto 0.7rem" }}
                />
                <div className="text-sidebar-icon">History</div>
              </p>
            </Link>
            <Link to={"/yourVideos"} className="iconSidebarDiv">
              <p>
                <AiFillPlaySquare
                  className="icon_sidebar"
                  size={22}
                  style={{ color: "white", margin: "auto 0.7rem" }}
                />
                <div className="text-sidebar-icon">Your Videos</div>
              </p>
            </Link>
            <Link to={"/watchLater"} className="iconSidebarDiv">
              <p>
                <MdWatchLater
                  className="icon_sidebar"
                  size={22}
                  style={{ color: "white", margin: "auto 0.7rem" }}
                />
                <div className="text-sidebar-icon">Watch Later</div>
              </p>
            </Link>
            <Link to={"/liked-videos"} className="iconSidebarDiv">
              <p>
                <AiFillLike
                  className="icon_sidebar"
                  size={22}
                  style={{ color: "white", margin: "auto 0.7rem" }}
                />
                <div className="text-sidebar-icon">Liked Videos</div>
              </p>
            </Link>
          </div>
          <div className="subscription_lsdbar">
            <h3>Your Subscription</h3>
            <div className="channel_lsdbar">
                <p>C</p>
                <div>Channel</div>
            </div>
            <div className="channel_lsdbar">
                <p>C</p>
                <div>Channel</div>
            </div>
            <div className="channel_lsdbar">
                <p>C</p>
                <div>Channel</div>
            </div>
            <div className="channel_lsdbar">
                <p>C</p>
                <div>Channel</div>
            </div>
          </div>
        </div>
        </>):""}
        <div className="container3drawerleftsidebar"
        onClick={toggleBtn}
        >

        </div>
      </div>
    </>
  );
};

export default DrawSidebar;

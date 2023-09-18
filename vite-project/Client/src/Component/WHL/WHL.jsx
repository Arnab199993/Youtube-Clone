import React, { useState } from "react";
import "./WHL.css"
import WHLVideoLIst from "./WHLVideoLIst";
import Navbar from "../Navbar/Navbar";
import DrawSidebar from "../LeftSidebar/DrawSidebar";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const WHL = ({Page,VideoList}) => {
  console.log("VideoListttttttttt",VideoList)
  const [toggleDrawerSideBar, settoggleDrawerSideBar] = useState(false);
  const toggleBtn = () => {
    settoggleDrawerSideBar(!toggleDrawerSideBar);
  };
  return (
    <>
    <div className="History_cont">
    <div className="leftSidebar_cont_history">
    <LeftSidebar/>
    </div>
      <div className="WHL_body">
      <p className="Container_WHL">
        <div className="Box_Whl LeftSide_Whl">
            <b>
                Your {Page} shown here
            </b>
            { Page==="History" && <div className="Clear_History_Btn">Clear all watch History</div>}
        </div> 
        <div className="rightSide_WHL">
            <h1>{Page}</h1>
            <div className="Whl_List">
                <WHLVideoLIst Page={Page} VideoList={VideoList}/>
            </div>
        </div>  
      </p>
      </div>
    </div>
      
    </>
  );
};

export default WHL;

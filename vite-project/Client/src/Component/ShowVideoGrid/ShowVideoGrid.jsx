import React, { useState } from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import "./ShowVideoGrid.css";
import { UseContextAPi } from "../Context/Context";
import { useNavigate } from "react-router-dom";
const ShowVideoGrid = () => {
  const navigate = useNavigate();
  const gotoVideoPage = (id) => {
    navigate(`/video-page/${id}`);
  };
  const Videos = UseContextAPi();
  return (
    <div className="Container_ShowvideoGrid">
      {Videos?.Videos?.map((item) => (
        <div
          onClick={() => gotoVideoPage(item?.id)}
          key={item?.id}
          className="video_box"
        >
          <ShowVideo video={item} />
        </div>
      ))}
    </div>
  );
};

export default ShowVideoGrid;

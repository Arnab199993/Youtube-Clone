import React from "react";
import istockphoto from "../../../public/istockphoto-1324924021-640_adpp_is.mp4";
import ShowVideo from "../ShowVideo/ShowVideo";
import "./ShowVideoList.css";
const ShowVideoList = ({ videoId }) => {
  const Vids = [
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
  ];
  console.log("VIDSSSSSSSSS", Vids);
  return (
    <>
      <div className="Container_ShowvideoGrid_History">
        {Vids?.filter((ele) => ele.id === videoId).map((item) => (
          <div  className="Video_Container">
            <div key={item?.id} className="video_box_History">
              <ShowVideo className={"Video_DIv"} video={item} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowVideoList;

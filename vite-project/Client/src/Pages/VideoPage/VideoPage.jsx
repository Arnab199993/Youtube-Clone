import React, { useState } from "react";
import Video from "../../../public/istockphoto-1324924021-640_adpp_is.mp4";
import "./VideoPage.css";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import {BiLike,BiDislike} from "react-icons/bi"
import {PiShareFat} from "react-icons/pi"
import {LiaDownloadSolid} from "react-icons/lia"
import {AiFillLike,AiOutlineLike,AiFillDislike,AiOutlineDislike} from "react-icons/ai"
import Comments from "../../Component/Comments/Comments";
const VideoPage = () => {
  const [like,setLike]=useState(false)
  const [dislike,setDisLike]=useState(false)
  const colorChange=()=>{
    setLike(!like)
  }
  return (
    <>
      <div className="Container-Video_page">
        <div className="container2_videopage">
          <div>
            <div className="Video_display_screen_videopage">
              <video
                controls
                autoPlay
                className="video_showVideo_videoPage"
                src={Video}
              />
              <div className="video_details_videopage">
                <div className="video_btns_title_videopage_cont">
                  <span className="video_title_videoPage">Title</span>
                  <div className="views_date_btns_VideoPage">
                    <div className="views_video_page">5 views</div>
                    <div className="dot_videopage"></div>
                    <span className="video_uoload_year">Upload 1 year ago</span>
                  </div>
                </div>
              </div>
              <div>{/* <LikeWatchLaterSaveBtns/> */}</div>
              <div className="channel_details_videopage">
                <div className="Channel_logo_videopage">
                  {" "}
                  {/**className="Channel_logo_videopage" */}
                  <span className="channel_logo">C</span>
                  <span className="Channel_Name_Videopage">
                    Channel Name
                  </span>{" "}
                  {/*className="Channel_Name_Videopage"*/}
                </div>
                <div  className="Show_Button">
                <div className="inner_div_btn">
                  <div  className="buttons">
                    {like?<AiFillLike onClick={colorChange}  size={22}/>:<AiOutlineLike onClick={colorChange}  size={22}/>}
                    <div className="buttons_texts">
                      24k
                    </div>
                  </div>
                  <div className="buttons">
                    {dislike?<AiFillDislike onClick={()=>setDisLike(!dislike)}  size={22}/>:<AiOutlineDislike onClick={()=>setDisLike(!dislike)} size={22}/>}
                  </div>
                  <div className="buttons">
                    <PiShareFat size={22}/>
                  </div>
                  <div className="buttons">
                    <LiaDownloadSolid size={22}/>
                    <div className="buttons_texts">
                      Downloads
                    </div>
                  </div>
                </div>

                  <LikeWatchLaterSaveBtns />
                </div>
              </div>
              <div className="Comments_Videopage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comments/>
              </div>
            </div>
          </div>
          <div>
            <div className="More_videoBar">More Videos</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;

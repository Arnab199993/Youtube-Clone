import React from "react";
import "./ShowVideo.css";
const ShowVideo = (props) => {
  console.log("videooooooooooooo", props.video);
  return (
    <>
      <div style={{ color: "white" }}>
        <video className="video_showVideo" src={props?.video?.video_src} />
      </div>
      <div className="video_descrption">
        <div>
          <div className="channel-logo-app">
            <div className="channel-text">
              <>{props?.video?.uploader.charAt(0).toUpperCase()}</>
            </div>
            <p className="title_vid_showVideo">title</p>
          </div>

          <div style={{ paddingLeft: "2.3rem" }}>
            <pre className="vid_with_upload_time">1-1-2001</pre>
            <pre className="vid_with_upload_time">
              <div>
                <span>5 views</span>
                <span className="dot"></span>
              </div>
              <span className="second-line"><div className="dot"></div></span><span className="videoline">video uploaded 1 year ago</span>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowVideo;

import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots, BsFlag } from "react-icons/bs";
import { RiHeartAddLine } from "react-icons/ri";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import { HiScissors } from "react-icons/hi";
import "./LikeWatchLaterSaveBtn.css";
const LikeWatchLaterSaveBtns = () => {
  const [save, setSave] = useState(false);
  const [threedotsModal, setthreedotsModal] = useState(false);
  const menuRef = useRef();
  const handleSave = () => {
    setSave(!save);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        setthreedotsModal(false);
      }
    });
  }, []);
  return (
    <>
      <div ref={menuRef} className="Btn_cont_video_page">
        <div
          
          onClick={() => {
            setthreedotsModal(!threedotsModal);
          }}
          className="Btn_videopage"
        >
          <BsThreeDots className="threedots" />
        </div>
        {threedotsModal ? (
          <div className="threedots_options">
            <div>
              {save ? (
                <div className="Save-btn" onClick={handleSave}>
                  <MdPlaylistAddCheck size={22} />
                  <b className="save_text">Saved</b>
                </div>
              ) : (
                <div className="Save-btn" onClick={handleSave}>
                  <MdPlaylistAdd size={22} />
                  <b className="save_text">Save</b>
                </div>
              )}
            </div>
            <div className="clipOption">
              <HiScissors size={22} />
              <b className="save_text">Clip</b>
            </div>
            <div>
              <div className="heart-btn">
                <RiHeartAddLine size={22} />
                <b className="save_text">Thanks</b>
              </div>
            </div>
            <div>
              <div className="report-btn">
                <BsFlag size={22} />
                <b className="save_text">Report</b>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default LikeWatchLaterSaveBtns;

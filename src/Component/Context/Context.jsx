import React from "react";
const userContext = React.createContext(null);
export const UseContextAPi = () => React.useContext(userContext);
import istockphoto from "../../../public/istockphoto-1324924021-640_adpp_is.mp4"
const Context = ({ children }) => {
     const Videos=[
    {
      id:1,
      video_src:istockphoto,
      channel:"62bafe6752cea35a6c30695f",
      uploader:"abc",
      title:"video 1",
      description:"Description of video 1"
    },
    {
      id:2,
      video_src:istockphoto,
      channel:"cdd",
      uploader:"abc",
      title:"video 2",
      description:"Description of video 2"
    },
    {
      id:3,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:4,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:5,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:6,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:7,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    },
    {
      id:8,
      video_src:istockphoto,
      channel:"add",
      uploader:"abc",
      title:"video 3",
      description:"Description of video 3"
    }
     
  ]
  return (
    <>
      <div>
        <userContext.Provider value={{
            Videos
        }}>{children}</userContext.Provider>
      </div>
    </>
  );
};
export default Context;

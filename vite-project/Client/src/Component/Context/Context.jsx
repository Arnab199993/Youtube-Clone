import React, { useEffect, useState } from "react";
const userContext = React.createContext(null);
export const UseContextAPi = () => React.useContext(userContext);
import istockphoto from "../../../public/istockphoto-1324924021-640_adpp_is.mp4";
import { auth,provider } from "../../Api/Config";
import { signInWithPopup } from "firebase/auth";
const Context = ({ children }) => {
  const [authData, setAuthData] = useState("");
  const [userProfile,setUserProfile]=useState("")
  // console.log("AUthDataaaaa", authData);
  const Videos = [
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
    {
      id: 9,
      video_src: istockphoto,
      channel: "62bafe6752cea35a6c30695f",
      uploader: "abc",
      title: "video 1",
      description: "Description of video 1",
    },
    {
      id: 10,
      video_src: istockphoto,
      channel: "cdd",
      uploader: "abc",
      title: "video 2",
      description: "Description of video 2",
    },
    {
      id: 11,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 12,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 13,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 14,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 15,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
    {
      id: 16,
      video_src: istockphoto,
      channel: "add",
      uploader: "abc",
      title: "video 3",
      description: "Description of video 3",
    },
  ];
  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("REsss", result);
      const accessToken = result.user.accessToken;
      // console.log("accessToken", accessToken);
      const userData = result.user;
      setAuthData(userData.email);
      setUserProfile(userData.displayName)
      localStorage.setItem("email", userData.email);
      localStorage.setItem("access-token", accessToken);
      localStorage.setItem("user-name",userData.displayName)
      dispatch(loginUser({ email: userData.email }));
    } catch (error) {
      console.error("Sign-in error:", error);
    }
    // window.location.reload();
  };
 
  return (
    <>
      <div>
        <userContext.Provider
          value={{
            Videos,
            handleClick,
            authData,
            setAuthData,
            signInWithPopup,
            userProfile
          }}
        >
          {children}
        </userContext.Provider>
      </div>
    </>
  );
};
export default Context;

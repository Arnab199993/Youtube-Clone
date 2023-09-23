import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Youtube from "../../../public/youtube.png";
import Searchbar from "../Searchbar/Searchbar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
const Navbar = ({ toggleBtn }) => {
  const [currentUser, setCurrentUser] = useState("");
  const onSuccess = (response) => {
    console.log("responserrrrrrr", response);
    const Email = response?.profileObj?.email;
    console.log("EMAIL", Email);
  };
  const onFailure = (res) => {
    console.log("Failures", res);
  };
  // const currentUser={
  //   result:{
  //     email:"arnabdutta623@gmail.com",
  //     joinedOn:"2022-07-15T09:57:23.4892"
  //   },
  // }
  const fetchApi = () => {
    const start = () => {
      gapi.client.init({
        clientId:
          "901094459537-0apnqq4bqnt3i7gudqhul1u2nc0sq1o0.apps.googleusercontent.com",
        scope: "email",
      });
    };
    gapi.load("client:auth2", start);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  
  return (
    <div className="Container-Navbar">
      <div className="Burger-Logo-Navbar">
        <div onClick={toggleBtn} className="Burger">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={"/"} className="logo-div-navbar">
          <img
            style={{ height: "30px", width: "30px", marginTop: "15%" }}
            src={Youtube}
          />
          <p className="logo-title-navbar">Youtube</p>
        </Link>
      </div>
      <Searchbar />

      <RiVideoAddLine className="vid-bell-navbar" size={22} />
      <div className="apps-box">
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className="bell-icon" />
      <div className="auth-cont-navbar">
        {currentUser ? (
          <>
            <div className="Channel-Logo">
              <p className="fst-char-logo-app">
                {currentUser?.result?.name ? (
                  <>{currentUser?.result?.name?.charAt(0).toUpperCase()}</>
                ) : (
                  <>{currentUser?.result?.email?.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
        ) : (
          <>
            <GoogleLogin
              clientId={"901094459537-0apnqq4bqnt3i7gudqhul1u2nc0sq1o0.apps.googleusercontent.com"}
              onSuccess={onSuccess}
              onFailure={onFailure}
            />
            <p className="authBtn">
              <BiUserCircle size={22} />
              <b>Sign In</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

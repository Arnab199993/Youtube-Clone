import { useContext, useEffect, useState } from "react";

import "./Navbar.css";
import Youtube from "../../../public/youtube.png";
import Searchbar from "../Searchbar/Searchbar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../../Api/Config";
import { signInWithPopup, signOut } from "firebase/auth";
import { loginUser } from "../../Redux/Slice";
import axios from "axios";
import Auth from "../../Pages/Auth/Auth";
import { UseContextAPi } from "../Context/Context";

const Navbar = ({ toggleBtn,handleCreate,setEditCreateChannelBtn }) => {
  const { handleClick, authData, setAuthData } = UseContextAPi();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const clientId =
    "901094459537-s23a5t5hu9jescqmr40g175ckgumtifo.apps.googleusercontent.com";

  const LogOut = async () => {
    await auth.signOut(authData);
    localStorage.removeItem("email");
    localStorage.removeItem("access-token");
    window.location.reload();
  };
  const handleCreateYourChannelModal=()=>{
    setShow(false)
  }
  useEffect(() => {
    setAuthData(localStorage.getItem("email"));
  }, []);

  return (
    <>
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
          {authData ? (
            <>
              <div
                onClick={() => {setShow((prev) => !prev)}}
                className="Channel-Logo"
              >
                <p className="fst-char-logo-app">
                  {authData?.result?.name ? (
                    <>{authData?.result?.name?.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{authData?.charAt(0).toUpperCase()}</>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <p onClick={handleClick} className="authBtn">
                <BiUserCircle size={22} />
                <b>Sign In</b>
              </p>
            </>
          )}
        </div>
      </div>
      {show ? <Auth setEditCreateChannelBtn={setEditCreateChannelBtn} handleCreateYourChannelModal={handleCreateYourChannelModal} handleCreate={handleCreate} logOut={LogOut} user={authData} /> : ""}
    </>
  );
};

export default Navbar;

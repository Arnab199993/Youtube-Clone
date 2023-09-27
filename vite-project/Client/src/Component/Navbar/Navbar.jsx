import { useEffect, useState } from "react";
import "./Navbar.css";
import Youtube from "../../../public/youtube.png";
import Searchbar from "../Searchbar/Searchbar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../../Api/Config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { loginUser } from "../../Redux/Slice";
import axios from "axios";

const Navbar = ({ toggleBtn }) => {
  const dispatch = useDispatch();

  const clientId =
    "901094459537-s23a5t5hu9jescqmr40g175ckgumtifo.apps.googleusercontent.com";
  const [authData, setAuthData] = useState("");
  console.log("AUthDataaaaa", authData);

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = result.user;
      setAuthData(userData.email);
      localStorage.setItem("email", userData.email);
      dispatch(loginUser({ email: userData.email }));
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };
  const currentUSer = useSelector((state)=>state.CurrentUserReducer);
  console.log("currentUSerrrr",currentUSer)
  /**
   const authorization = getAuth();
    // const user = authorization.currentUser;
    // console.log("FirebaseUser", user);
    // onAuthStateChanged(authorization, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //     console.log("UUUUUUID", uid);
    //   } else {
    //   }
    // });
   */
  useEffect(() => {
    setAuthData(localStorage.getItem("email"));
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
        {authData ? (
          <>
            <div className="Channel-Logo">
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
  );
};

export default Navbar;

import React from "react";
import "./Auth.css";
import { UseContextAPi } from "../../Component/Context/Context";
const Auth = ({ user, logOut,setEditCreateChannelBtn }) => {
 const {userProfile}=UseContextAPi()
 console.log("userProfile",userProfile)
  return (
    <>
      <div className="auth_container">
        <div className="auth_container2">
          <div className="details_cont">
            <p className="user_details">
              <div className="Channel_Logo_auth">
                <p className="fst-char-logo-app">
                  {user?.result?.name ? (
                    <>{authData?.result?.name?.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{user?.charAt(0).toUpperCase()}</>
                  )}
                </p>
              </div>
            </p>
            <div style={{ color: "white" }} className="email_Auth">
              {user}
            </div>
          </div>
          {user?.result?.name?<>
          <input type="submit" className="Btns_AUth" value={"Your Channel"}  onClick={()=>setEditCreateChannelBtn(true)}  />
          </>: <input type="submit" className="Btns_AUth" value={"Create Your Channel"}  onClick={()=>setEditCreateChannelBtn(true)}  />}
         
          <button onClick={logOut} className="Btns_AUth">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;

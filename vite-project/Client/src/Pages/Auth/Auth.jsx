import React from "react";
import "./Auth.css";


const Auth = ({ user,logOut }) => {
    
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
          <button className="Btns_AUth">Create your channel</button>
          <button onClick={logOut} className="Btns_AUth">Logout</button>
        </div>
      </div>
    </>
  );
};

export default Auth;

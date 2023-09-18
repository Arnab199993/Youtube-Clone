import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import DrawSidebar from "./Component/LeftSidebar/DrawSidebar";
import Explore from "./Pages/Explore/Explore";

function App() {
  const [toggleDrawerSideBar, settoggleDrawerSideBar] = useState(false);
  const toggleBtn = () => {
    settoggleDrawerSideBar(!toggleDrawerSideBar);
  };
  return (
    <>
      <div>
        <Navbar toggleBtn={toggleBtn} />
        <DrawSidebar
          toggleDrawerSideBar={toggleDrawerSideBar}
          settoggleDrawerSideBar={settoggleDrawerSideBar}
          toggleBtn={toggleBtn}
        />
        <Home />
      </div>
    </>
  );
}

export default App;

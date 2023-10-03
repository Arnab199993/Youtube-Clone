import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import DrawSidebar from "./Component/LeftSidebar/DrawSidebar";
import Explore from "./Pages/Explore/Explore";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";

function App() {
  const [toggleDrawerSideBar, settoggleDrawerSideBar] = useState(false);
  const [editCreateChannelBtn, setEditCreateChannelBtn] = useState(false);

  // const handleCreate = () => {
  //   setEditCreateChannelBtn(true);
  // };
  const toggleBtn = () => {
    settoggleDrawerSideBar(!toggleDrawerSideBar);
  };
  // const handleCloseModal=()=>{
  //   setEditCreateChannelBtn(false)
  // }
  return (
    <>
      <div>
        {/* {editCreateChannelBtn && ( */}
          <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} editCreateChannelBtn={editCreateChannelBtn} />
        {/* )} */}

        <Navbar setEditCreateChannelBtn={setEditCreateChannelBtn}  toggleBtn={toggleBtn} />
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

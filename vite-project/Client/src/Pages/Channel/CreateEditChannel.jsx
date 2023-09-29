import React from "react";
import "./CreateEditChannel.css";
import { UseContextAPi } from "../../Component/Context/Context";
const CreateEditChannel = ({setEditCreateChannelBtn}) => {
  const { authData } = UseContextAPi();
  const currentUser = {
    result: {
      email: "arnabdutta623@gmail.com",
      joinedOn: "2022-07-15T09:57:23:489",
    },
  };
  return (
    <>
     
        <>
          <div onClick={()=>setEditCreateChannelBtn(false)} className="container_create_Edit_Channel">
            <input type="submit" name="text" value={"X"} className="ibtn_x" />
            <div className="container2_create_Edit_Channel">
              <h1>
                {authData.name ? <>Edit</> : <>Create</>}
                Your Channel
              </h1>
              <input
                type="text"
                name="text"
                placeholder="Please enter your/channel name"
                className="ibox"
              />
              <textarea
                rows={15}
                placeholder="Enter Channel Description"
                className="ibox"
              />
              {/* <input type="submit" value={"submit"} className="iBtn"/> */}
              <button className="iBtn" value={"submit"}>
                Submit
              </button>
            </div>
          </div>
        </>

    </>
  );
};

export default CreateEditChannel;

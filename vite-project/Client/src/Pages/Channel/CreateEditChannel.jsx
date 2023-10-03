import React, { useEffect, useState } from "react";
import "./CreateEditChannel.css";
import { UseContextAPi } from "../../Component/Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Slice";
import { updateChannelData } from "../../Redux/Slice";
import { addChannel } from "../../Redux/Slice";
import axios from "axios";
const CreateEditChannel = ({ setEditCreateChannelBtn }) => {
  const { authData } = UseContextAPi();
  // const currentUser = {
  //   result: {
  //     email: "arnabdutta623@gmail.com",
  //     joinedOn: "2022-07-15T09:57:23:489",
  //   },
  // };
 
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [channels, setChannels] = useState([]);
  const [channelData, setChannelData] = useState({
    name: '',
    description: '',
  });
  useEffect(() => {
    axios.get('http://127.0.0.1:5500/api/channels')
      .then(response => setChannels(response.data))
      .catch(error => console.error(error));
  }, []);
  // const [name, setName] = useState(currentUser?.result?.name);
  // const [desc, setDesc] = useState(currentUser?.result?.desc);
  // console.log("name",name,"desc",desc)
  // const dispatch = useDispatch(
  //   updateChannelData(currentUser?.result?._id, {
  //     name: name,
  //     desc: desc,
  //   })
  // );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChannelData({ ...channelData, [name]: value });
  };

  // const handleSubmit = () => {
  //   console.log("Llllllll")
  //   if (!channelData.name) {
  //     alert("Please Enter Your Name");
  //   } else if (!channelData.description) {
  //     alert("Please Enter Description");
  //   } else {
  //     setEditCreateChannelBtn(false);
      
  //     setTimeout(() => {
  //       dispatch(addChannel(channelData));
  //     }, 5000);
  //   }
  // };
  const handleSubmit = () => {
    // Send a POST request to create a new channel
    axios.post('/api/channels', channelData)
      .then(response => {
        setChannels([...channels, response.data]);
        setChannelData({ name: '', description: '' });
      })
      .catch(error => console.error(error));
  };
  return (
    <>
      <>
        <div
          onClick={() => setEditCreateChannelBtn(false)}
          className="container_create_Edit_Channel"
        >
          <input type="submit" name="text" value={"X"} className="ibtn_x" />
          <div className="container2_create_Edit_Channel">
            <h1>
              {authData.name ? <>Edit</> : <>Create</>}
              Your Channel
            </h1>
            <input
              type="text"
              name="name"
              placeholder="Please enter your/channel name"
              className="ibox"
              value={channelData.name}
              onChange={handleChange}
            />
            <textarea
              rows={15}
              placeholder="Enter Channel Description"
              className="ibox"
              name="description"
              value={channelData.description}
              onChange={handleChange}
            />
            {/* <input type="submit" value={"submit"} className="iBtn"/> */}
            <button onClick={handleSubmit} className="iBtn" value={"submit"}>
              Submit
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default CreateEditChannel;

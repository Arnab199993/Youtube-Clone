import React, { useEffect, useRef, useState } from "react";
import "../Comments/Comments.css";
import { BsThreeDotsVertical } from "react-icons/bs";
const DisplayComments = ({
  commentBody,
  userCommented,
  commentsList,
  ID,
  setCommentList,
  index,
}) => {
  const [showAction, setShowAction] = useState(false);
  const [Edit, SetEdit] = useState(false);
  const [change, setChange] = useState(false);
  const [comment, setComment] = useState("");
  const [commentBdy,setCommentBdy]=useState("")
  const [editIndex, setEditIndex] = useState("");
  const [editStatus, setEditStatus] = useState(false);
  
//   const handleChange=(event)=>{
   
//   }
  const populateEditData = (ctId, ctBd) => {
    setCommentBdy(ctBd)
    SetEdit(true);
    setEditIndex(index);
    setEditStatus(true);
  };
//   const handleEdit = () => {
//     setEditStatus(true);
//   };
  //   const handleEdit=(ctId,ctBd)=>{
  //     SetEdit(true)
  //     setComment(ctBd)
  //   }
  const refElem = useRef();
  const border_change = () => {
    setChange(true);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
    setCommentBdy(e.target.value)
  };
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!refElem.current.contains(e.target)) {
        setChange(false);
      }
    });
  }, []);
  const handleCancel=()=>{
    setFashion(updatedData)
    setEditStatus(false)
    setEditIndex(null)
    setTask(defaultState)      



    setComment(defaultState);
    setEditStatus(false);
    setCommentBdy("")
    setComment("")
    setEditIndex("")
    setEditStatus(false)
  }
  const handleSave=()=>{
    setEditStatus(false)
    setCommentBdy("")
  }

  //   const handleDelete=()=>{
  //     commentsList.splice(ID,1)
  //     console.log("IDDDDDDDDDDDD",ID)
  //     let newArr=[]
  //     for(let i=0;i<=commentsList.length-1;i++){
  //         newArr.push(commentsList[i])
  //         console.log("commentsListtttttttttt",commentsList)
  //     }
  //     setCommentList(newArr)
  //   }
  return (
    <>
      <div ref={refElem}>
        <div className="whole_comment_container">
          <div style={{width:"60rem"}} className="comment_container">
            {Edit ? (
              <>
                <form className="comments_of_form_comments">
                  {change ? (
                    <input
                      onClick={border_change}
                      onChange={handleComment}
                      className="comment_ibox_change"
                      type="text"
                      placeholder="Edit Comment..."
                      value={commentBdy}
                      name="cmt"
                    />
                  ) : (
                    <input
                      onClick={border_change}
                      onChange={handleComment}
                      className="comment_ibox"
                      type="text"
                      placeholder="Edit Comment..."
                      value={commentBdy}
                      name="cmt"
                      
                    />
                  )}
                </form>
                {editStatus ? (
                  <>
                   <div className="Btn_cont">
                   <button className="saveBtn" onClick={handleSave}>Save</button>
                    <button className="CancelBtn" onClick={handleCancel}>Cancel</button>
                   </div>
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              <>
                <div className="User_Commented">{userCommented}</div>
                <div className="CommentBody">{commentBody}</div>
              </>
            )}
            {/* <div className="User_Commented">{userCommented}</div>
            <div className="CommentBody">{commentBody}</div> */}
            <br></br>
          </div>
          <div>
            <BsThreeDotsVertical
              className="threedotcomment"
              onClick={() => setShowAction(!showAction)}
            />
            {showAction ? (
              <div className="Edit_delete_Option_div">
                <div
                  onClick={() => {
                    populateEditData(ID, commentBody, index);
                  }}
                  className="actions_Edit"
                >
                  Edit
                </div>
                <div className="actions_Delete">Delete</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayComments;

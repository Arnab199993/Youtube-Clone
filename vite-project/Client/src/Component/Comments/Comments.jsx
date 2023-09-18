import React, { useEffect, useRef, useState } from "react";
import "./Comments.css";
import DisplayComments from "./DisplayComments";

const Comments = () => {
  const [change, setChange] = useState(false);
  const [comment, setComment] = useState("");
  const [ID,setID]=useState("")
  console.log("IIIIIIIIIIIIIIII",ID)
  const [commentsList,setCommentList]=useState([{
    id: 0,
    commentBody: "This is not the Batman ending we deserved or even needed",
    userCommented: "PlaystationUserCJ",
  },
  {
    id: 1,
    commentBody: "Hi",
    userCommented: "Xyz",
  },
  {
    id: 2,
    commentBody: "Hiiiiiiiii",
    userCommented: "Xyzzzzzzzzzzzzzzzzzzzzzz",
  },])

  const [add, setAdd] = useState([]);
  const [id,setId]=useState("")
  const refElem = useRef();
  const border_change = () => {
    setChange(true);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!refElem.current.contains(e.target)) {
        setChange(false);
      }
    });
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    // if (comment.trim() !== '') {
    setAdd([...add, comment]);
    setComment("");
    setChange(false);
    // }
  };
  const handleCancel = () => {
    setComment("");
    setChange(false);
  };
  
  const handleDelete = (id) => {
    setId(id)
  };

  return (
    <>
      <div ref={refElem}>
        <form className="comments_of_form_comments">
          {change ? (
            <input
              onClick={border_change}
              onChange={handleComment}
              className="comment_ibox_change"
              type="text"
              placeholder="Add a comment..."
              value={commentsList.commentBody}
            />
          ) : (
            <input
              onClick={border_change}
              onChange={handleComment}
              className="comment_ibox"
              type="text"
              placeholder="Add a comment..."
              value={commentsList.commentBody}
            />
          )}
        </form>
        <div className="Btn_comment_div">
          {change ? (
            <>
              <button
                onClick={handleCancel}
                className="comment_cancel_button_comments"
              >
                Cancel
              </button>
              {comment.length > 0 ? (
                <button
                  onClick={handleAdd}
                  className="comment_add_button_comments"
                >
                  Comment
                </button>
              ) : (
                <button
                  disabled
                  onClick={handleAdd}
                  className="NOcomment_add_button_comments"
                >
                  Comment
                </button>
              )}
            </>
          ) : (
            ""
          )}
        </div>
        <div className="display_comment_container">
          {/* {add.map((ele, i) => (
                        <div className="CommentBody" style={{ color: 'white' }} key={i}>
                            {ele}
                        </div>
                    ))} */}
          {commentsList.map((com,index) => (
            <div onClick={()=>handleDelete(setID(com.id))} key={index}>
              <DisplayComments
              commentBody={com.commentBody}
              userCommented={com.userCommented}
              commentsList={commentsList}
              setCommentList={setCommentList}
              ID={com.id}
              index={index}
              
            />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;

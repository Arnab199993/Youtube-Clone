import React, { useEffect, useRef, useState } from 'react';
import './Comments.css';

const Comments = () => {
    const [change, setChange] = useState(false);
    const [comment, setComment] = useState('');
    const [add, setAdd] = useState([]);
    const refElem = useRef();

    const border_change = () => {
        setChange(true);
    }

    const handleComment = (e) => {
        setComment(e.target.value);
    }

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
            setComment('');
            setChange(false);
        // }
    }

    const handleCancel = () => {
        setComment('');
        setChange(false);
    }

    return (
        <>
            <div ref={refElem}>
                <form className='comments_of_form_comments'>
                    {change ? (
                        <input
                            onClick={border_change}
                            onChange={handleComment}
                            className='comment_ibox_change'
                            type='text'
                            placeholder='Add a comment...'
                            value={comment}
                        />
                    ) : (
                        <input
                            onClick={border_change}
                            onChange={handleComment}
                            className='comment_ibox'
                            type='text'
                            placeholder='Add a comment...'
                            value={comment}
                        />
                    )}
                </form>
                <div className='Btn_comment_div'>
                    {change ? (
                        <>
                            <button onClick={handleCancel} className='comment_cancel_button_comments'>Cancel</button>
                            {comment.length > 0 ? (
                                <button onClick={handleAdd} className='comment_add_button_comments'>Comment</button>
                            ) : (
                                <button disabled onClick={handleAdd} className='comment_add_button_comments'>Comment</button>
                            )}
                        </>
                    ) : (
                        ''
                    )}
                </div>
                <div className='display_comment_container'>
                    {add.map((ele, i) => (
                        <div style={{ color: 'white' }} key={i}>
                            {ele}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Comments;
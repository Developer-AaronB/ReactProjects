import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from  './Modal';
import classes from './PostList.module.css';


function PostList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody ] = useState('');
    const [enteredAuthor, setEnteredAuthor ] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost
    //                 onBodyChange={bodyChangeHandler}
    //                 onAuthorChange={authorChangeHandler}
    //             />
    //         </Modal>
    //     );
    // }


    return (
        <>
            {isPosting && (
             <Modal onClose={onStopPosting}>
                <NewPost
                     onBodyChange={bodyChangeHandler}
                     onAuthorChange={authorChangeHandler}
                />
            </Modal>               
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author={enteredAuthor} body={enteredBody} />
            </ul>
        </>
    );
}

export default PostList;
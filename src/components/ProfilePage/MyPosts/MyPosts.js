import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";

const MyPosts = props => {
    let textAreaRef = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const updateNewPost = () => {
        const text = textAreaRef.current.value
        props.dispatch(updateNewPostActionCreator(text))
    }

    return(
        <div className={classes.MyPosts}>
            My posts
            <div className={classes.newPost}>
                <textarea
                    ref={textAreaRef}
                    value={props.state.newPost}
                    onChange={updateNewPost}
                >
                </textarea>
                <button
                    onClick={addPost}
                >
                    Добавить Пост
                </button>
            </div>
            <div className={classes.posts}>
                {props.state.posts.map((item, index) => {
                    return (
                        <Post
                            key={index}
                            message={item.postText}
                            likes={item.likes}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MyPosts
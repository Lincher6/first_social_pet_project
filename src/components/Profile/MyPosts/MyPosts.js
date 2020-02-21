import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = props => {
    const state = {
        postData: [
            {id: 1, postText: 'Hi, how are you?', likes: 5},
            {id: 2, postText: 'It\'s my first post', likes: 13},
            {id: 3, postText: 'Now second', likes: 22},
            {id: 4, postText: 'And final', likes: 1},
        ]
    }

    return(
        <div className={classes.MyPosts}>
            My posts
            <div className={classes.newPost}>
                <textarea name="" id="" defaultValue='text'></textarea>
            </div>
            <div className={classes.posts}>
                {state.postData.map((item, index) => {
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
import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = props => {
    return(
        <div className={classes.MyPosts}>
            My posts
            <div className={classes.newPost}>
                <textarea name="" id="" defaultValue='text'></textarea>
            </div>
            <div className={classes.posts}>
                <Post message={'Hi, how are you?'} likes={6}/>
                <Post message={'It\'s my first post'} likes={5}/>
                <Post message={'Now second'} likes={4}/>
                <Post message={'And final'} likes={3}/>
            </div>
        </div>
    )
}

export default MyPosts
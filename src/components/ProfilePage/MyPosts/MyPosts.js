import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {MessageForm} from "../../../forms/messageForm/MessageForm";
import {withFormik} from "formik";
import * as yup from 'yup'

const MyPosts = props => {
    const MessageFormik = withFormik({
        validationSchema: yup.object().shape({
            newMessage: yup.string().required('обязательное поле')
        }),
        handleSubmit(values) {
            props.addPost(values.newMessage)
        }
    })(MessageForm)

    return(
        <div>
            <div className={classes.MyPosts}>
                <MessageFormik/>
                <div className={classes.posts}>
                    {props.posts.map((item, index) => {
                        return (
                            <Post
                                key={index}
                                message={item.postText}
                                likes={item.likes}
                                smallPicture={props.photos.small}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyPosts
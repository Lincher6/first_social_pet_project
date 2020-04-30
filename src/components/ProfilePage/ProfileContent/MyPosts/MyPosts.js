import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {MessageForm} from "../../../../forms/messageForm/MessageForm";
import {withFormik} from "formik";
import * as yup from 'yup'
import {addPost, setPosts} from "../../../../redux/profileReducer";
import {connect} from "react-redux";

const MyPosts = ({profile, ...props}) => {

    const MessageFormik = withFormik({
        validationSchema: yup.object().shape({
            newMessage: yup.string().required('обязательное поле')
        }),
        handleSubmit(values) {
            props.addPost(values.newMessage)
        }
    })(MessageForm)

    const dateFormat = (date) => new Date(date).toLocaleString(
        'ru',
        {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }
    )

    return(
        <div>
            <div className={classes.MyPosts}>

                <MessageFormik/>

                <div className={classes.posts}>
                    {props.posts.map((item, index) => {
                        return (
                            <Post
                                key={item.id}
                                message={item.title}
                                date={dateFormat(item.addedDate)}
                                smallPicture={profile ? profile.photos.small : null}
                            />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    profile: state.profileReducer.profile,
    posts: state.profileReducer.posts,
})

const mapDispatchToProps = {
    addPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)
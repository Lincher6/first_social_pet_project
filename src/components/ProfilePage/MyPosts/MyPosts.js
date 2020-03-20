import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import Button from "../../common/Button/Button";
import TextArea from "../../common/TextArea/TextArea";

const MyPosts = props => {
    const addPost = (values) => {
        console.log(values)
        props.addPost(values.newPostText)
    }

    const AddPostForm = (props) => (
        <form className={classes.newPost} onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'newPostText'} placeholder={'New Post Text'}/>
            </div>
            <div>
                <Button>Добавить Пост</Button>
            </div>
        </form>
    )

    const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)

    return(
        <div className={classes.MyPosts}>
            <div className={classes.title}>
                My posts
            </div>
            <AddPostReduxForm onSubmit={addPost}/>
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
    )
}

export default MyPosts
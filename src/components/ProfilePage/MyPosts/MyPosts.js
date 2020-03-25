import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import Button from "../../common/Button/Button";
import {FormComponent} from "../../common/TextArea/TextArea";
import {maxLength, required} from "../../../validators/validators";

const MyPosts = props => {
    const maxLength50 = maxLength(50)
    const TextField = FormComponent('textarea')

    const addPost = (values) => {
        console.log(values)
        props.addPost(values.newPostText)
    }

    const AddPostForm = (props) => (
        <form className={classes.newPost} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={TextField}
                    name={'newPostText'}
                    placeholder={'New Post Text'}
                    validate={[required, maxLength50]}
                />
            </div>
            <div style={{marginTop: '-15px'}}>
                <Button>Добавить Пост</Button>
            </div>
        </form>
    )

    const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)

    return(
        <div>
            <div className={classes.MyPosts}>
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
        </div>
    )
}

export default MyPosts
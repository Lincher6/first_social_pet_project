import React from 'react'
import classes from './UsersSearch.module.css'
import {withFormik} from "formik";
import {SearchForm} from "../../../forms/searchForm/SearchForm";

const UsersFormik = withFormik({
    mapPropsToValues({getUsers, setPortionNumber}) {
        return {getUsers, setPortionNumber}
    },
    handleSubmit(values) {
        values.setPortionNumber(1)
        values.getUsers(values.name)
    }
})(SearchForm)

const UsersSearch = (props) => {

    return (
        <div className={classes.searchUsersWrapper}>
            <div className={classes.searchUsers}>
                <UsersFormik {...props}/>
            </div>
        </div>
    )
}

export default UsersSearch
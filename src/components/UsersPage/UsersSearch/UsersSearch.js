import React from 'react'
import classes from './UsersSearch.module.css'
import {withFormik} from "formik";
import {SearchForm} from "../../../forms/searchForm/SearchForm";

const UsersFormik = withFormik({
    mapPropsToValues({searchUsers}) {
        return {searchUsers}
    },
    handleSubmit(values) {
        values.searchUsers(values.name)
    }
})(SearchForm)

const UsersSearch = ({searchUsers}) => {

    return (
        <div className={classes.searchUsersWrapper}>
            <div className={classes.searchUsers}>
                <UsersFormik searchUsers={searchUsers}/>
            </div>
        </div>
    )
}

export default UsersSearch
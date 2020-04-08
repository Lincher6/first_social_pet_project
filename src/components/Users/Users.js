import React from 'react'
import classes from './Users.module.css'
import User from "./User/User";
import {SearchForm} from "../../forms/searchForm/SearchForm";
import Pagination from "../common/Pagination/Pagination";
import {withFormik} from "formik";

const Users = props => {
    const UsersFormik = withFormik({
        handleSubmit(values) {
            console.log(values)
        }
    })(SearchForm)

    const pagination = (
        <Pagination
            pageSize={props.pageSize}
            totalUserCount={props.totalUserCount}
            currentPage={props.currentPage}
            onPageChange={props.onPageChange}

        />
    )

    return (
        <div className={classes.users}>
            <div>
                {pagination}
                {
                    props.users.map((user) => (
                        <User
                            key={user.id}
                            {...user}
                            unFollowHandler={props.unFollowHandler}
                            followHandler={props.followHandler}
                            followingInProgress={props.followingInProgress}
                        />
                    ))
                }
                {pagination}
            </div>

            <div className={classes.searchUsersWrapper}>
                <div className={classes.searchUsers}>
                    <UsersFormik/>
                </div>
            </div>

        </div>
    )
}

export default Users
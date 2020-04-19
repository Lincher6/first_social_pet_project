import React, {useEffect} from "react";
import {getUsers, setPortionNumber} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users/Users";
import Loader from "../common/Loader/Loader";
import classes from "./UsersPage.module.css";
import UsersSearch from "./UsersSearch/UsersSearch";
import Pagination from "../common/Pagination/Pagination";

const UsersPage = props => {

    useEffect(() => {
        if (props.users.length === 0) {
            props.getUsers(props.searchValue)
        }
    }, [])

    const onPageChange = page => {
        props.getUsers(props.searchValue, page, props.pageSize)
    }

    const pagination = (
        <Pagination
            pageSize={props.pageSize}
            totalUserCount={props.totalUserCount}
            currentPage={props.currentPage}
            onPageChange={onPageChange}
            portionNumber={props.portionNumber}
            setPortionNumber={props.setPortionNumber}
        />
    )

    return (
        <div className={classes.usersPage}>
            {props.isLoading
                ? <Loader/>
                : <div>
                    {pagination}
                    <Users/>
                    {pagination}
                </div>
            }
            <UsersSearch getUsers={props.getUsers} setPortionNumber={props.setPortionNumber}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUserCount: state.usersReducer.totalUserCount,
    currentPage: state.usersReducer.currentPage,
    isLoading: state.usersReducer.isLoading,
    portionNumber: state.usersReducer.portionNumber,
    searchValue: state.usersReducer.searchValue
})

const mapDispatchToProps = {
    getUsers,
    setPortionNumber,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
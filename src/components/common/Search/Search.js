import React from 'react'
import classes from './Search.module.css'
import {FaSearch} from "react-icons/all";
import {withRouter} from "react-router-dom";
import {Field, Form, withFormik} from "formik";
import {getUsers, setCurrentPage, setSearchValue} from "../../../redux/usersReducer";
import {connect} from "react-redux";

const Search = props => {

    const search = ({handleSubmit, changeHandler}) => {
        return <Form className={classes.searchField}>
            <div className={classes.searchIcon}>
                <FaSearch onClick={handleSubmit}/>
            </div>
            <div>
                <Field type={'text'}
                       name={'search'}
                       placeholder={'Введите имя'}
                />
            </div>
        </Form>
    }

    const SearchFormik = withFormik({
        mapPropsToValues() {
            return {search: ''}
        },

        handleSubmit(values) {
            console.log(values.search)
            props.getUsers(values.search)
            props.history.push("/users")
        }
    })(search)

    return <SearchFormik/>
}

export default withRouter(connect(null, {setSearchValue, setCurrentPage, getUsers})(Search))
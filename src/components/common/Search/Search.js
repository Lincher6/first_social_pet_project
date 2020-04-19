import React from 'react'
import classes from './Search.module.css'
import {FaSearch} from "react-icons/all";
import {withRouter} from "react-router-dom";
import {Field, Form, withFormik} from "formik";
import {getUsers, setPortionNumber} from "../../../redux/usersReducer";
import {connect} from "react-redux";

const Search = props => {

    const search = ({handleSubmit}) => {
        return <Form className={classes.searchField}>
            <div className={classes.searchIcon}>
                <FaSearch onClick={handleSubmit}/>
            </div>
            <div>
                <Field
                    type={'text'}
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
            props.setPortionNumber(1)
            props.getUsers(values.search)
            props.history.push("/users")
        }
    })(search)

    return <SearchFormik/>
}

export default withRouter(connect(null, {getUsers, setPortionNumber})(Search))
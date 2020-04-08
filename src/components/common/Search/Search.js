import React from 'react'
import classes from './Search.module.css'
import {FaSearch} from "react-icons/all";

const Search = props => (
    <div className={classes.searchField}>
        <div className={classes.searchIcon}>
            <FaSearch />
        </div>
        <div>
            <input placeholder={'search'}/>
        </div>
    </div>
)

export default Search
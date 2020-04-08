import React from 'react'
import classes from './Pagination.module.css'

const Pagination = props => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.pageNumbers}>
            {
                pages.map((page) => (
                    <span
                        key={page}
                        className={(props.currentPage === page ? classes.currentPage : null) + ' ' + classes.pageNumber}
                        onClick={() => props.onPageChange(page)}
                    >
                                {page}&nbsp;
                            </span>
                ))
            }
        </div>
    )
}

export default Pagination
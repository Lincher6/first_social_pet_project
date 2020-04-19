import React from 'react'
import classes from './Pagination.module.css'
import {FaArrowLeft, FaArrowRight} from "react-icons/all";

const Pagination = ({
                        totalUserCount, pageSize = 50, currentPage = 1,
                        portionSize = 10, onPageChange, portionNumber, setPortionNumber
                    }) => {
    let pageCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionsCount = totalUserCount / (pageSize * portionSize)
    const leftBorder = (portionNumber - 1) * portionSize + 1
    const rightBorder = portionNumber * portionSize

    const pagesPortion = pages.filter((page) => page >= leftBorder && page <= rightBorder)

    const leftButtonClasses = [classes.pageNumber]
    if (leftBorder < 2) {
        leftButtonClasses.push(classes.disable)
    }

    const rightButtonClasses = [classes.pageNumber]
    if (portionNumber > portionsCount) {
        rightButtonClasses.push(classes.disable)
    }

    const toLeft = () => {
        setPortionNumber(portionNumber - 1)
    }

    const toRight = () => {
        setPortionNumber(portionNumber + 1)
    }

    return (
        <div className={classes.pageNumbers}>
            <div className={leftButtonClasses.join(' ')} onClick={toLeft}>
                <FaArrowLeft/>
            </div>
            {
                pagesPortion.map((page) => (
                    <div
                        key={page}
                        className={(currentPage === page ? classes.currentPage : null) + ' ' + classes.pageNumber}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </div>
                ))
            }
            <div className={rightButtonClasses.join(' ')} onClick={toRight}><FaArrowRight/></div>
        </div>
    )
}

export default Pagination
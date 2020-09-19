import React from 'react'
import { hamStyles, lineStyles } from './mobile_nav_button.module.scss'

const MobileNavButton = ({ handleClick }) => {
    return (
        <div onClick={handleClick} className={hamStyles}>
            <div className={lineStyles} />
            <div className={lineStyles} />
            <div className={lineStyles} />
        </div>
    )
}

export default MobileNavButton

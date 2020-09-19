import React from 'react'
import { drawerStyles, airdropStyles } from './mobile_drawer.module.scss'

const MobileDrawer = ({ handleClick }) => {
    return (
        <React.Fragment>
            <div className={drawerStyles}>
                <h3>Menu</h3>
            </div>
            <div className={airdropStyles} onClick={handleClick} />
        </React.Fragment>
    )
}

export default MobileDrawer

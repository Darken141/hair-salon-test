import React from 'react'
import HairdyerIcon from '../../images/hairdryer_comb.svg'
import ScissorsIcon from '../../images/scissors_comb.svg'
import SprayIcon from '../../images/spray_bottle.svg'

import { featuredServicesStyles, rowStyles } from './featured_services.module.scss'

const FeaturedServices = () => {
    return (
        <section className={featuredServicesStyles}>
            <div className={rowStyles}>
                <div>
                    <HairdyerIcon />
                    <h4>Lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum!</p>
                </div>
                <div>
                    <ScissorsIcon />
                    <h4>Lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum!</p>
                </div>
                <div>
                    <SprayIcon />
                    <h4>Lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum!</p>
                </div>
            </div>
        </section>
    )
}

export default FeaturedServices

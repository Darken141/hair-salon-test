import React from 'react'
import HairdyerIcon from '../../images/hairdryer_comb.svg'
import ScissorsIcon from '../../images/scissors_comb.svg'
import SprayIcon from '../../images/spray_bottle.svg'

import { featuredServicesStyles, rowStyles } from './featured_services.module.scss'

const FeaturedServices = () => {
    const cards = [
        {
            icon: <HairdyerIcon />,
            heading: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum!",
            sal: {
                animation: "slide-right",
                duration: "1800"
            }
        },
        {
            icon: <ScissorsIcon />,
            heading: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum!",
            sal: {
                animation: "slide-up",
                duration: "1800"
            }
        },
        {
            icon: <SprayIcon />,
            heading: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum!",
            sal: {
                animation: "slide-left",
                duration: "1800"
            }
        }
    ]

    return (
        <section className={featuredServicesStyles}>
            <div className={rowStyles}>
                {cards.map(({ icon, heading, desc, sal }, idx) => {
                    return (
                        <div
                            key={idx}
                            data-sal={sal.animation}
                            data-sal-duration={sal.duration}
                        >
                            {icon}
                            <h4>{heading}</h4>
                            <p>{desc}</p>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}

export default FeaturedServices

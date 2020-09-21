import React from 'react'
import { GrUserFemale } from 'react-icons/gr'
import { AiFillStar } from 'react-icons/ai'

import { testimonialSectionStyles, rowStyles, cardStyles, userSvg } from './testimonial_section.module.scss'

const TestimonialSection = () => {
    const testimonials = [
        {
            icon: <GrUserFemale className={userSvg} />,
            stars: 5,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus veritatis eaque non quasi assumenda nemo.",
            author: "Jasmine Doe",
            sal: {
                animation: "slide-right",
                duration: "1800"
            }
        },
        {
            icon: <GrUserFemale className={userSvg} />,
            stars: 5,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus veritatis eaque non quasi assumenda nemo.",
            author: "Jasmine Doe",
            sal: {
                animation: "slide-up",
                duration: "1800"
            }
        },
        {
            icon: <GrUserFemale className={userSvg} />,
            stars: 5,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus veritatis eaque non quasi assumenda nemo.",
            author: "Jasmine Doe",
            sal: {
                animation: "slide-left",
                duration: "1800"
            }
        }
    ]


    return (
        <section id='testimonials' className={testimonialSectionStyles}>
            <h2
                data-sal="fade"
                data-sal-duration="1800"
            >Lorem ipsum dolor sit amet.</h2>


            <div className={rowStyles}>
                {
                    testimonials.map(({ icon, stars, desc, author, sal }, idx) => {
                        return (
                            <div
                                key={idx}
                                className={cardStyles}
                                data-sal={sal.animation}
                                data-sal-duration={sal.duration}
                            >
                                {icon}
                                <div>
                                    {Array.from({ length: stars }, (v, idx) => (
                                        <AiFillStar key={idx} />
                                    ))}
                                </div>
                                <p>{desc}</p>
                                <span>- {author}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default TestimonialSection

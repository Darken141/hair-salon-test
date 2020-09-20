import React from 'react'
import { GrUserFemale } from 'react-icons/gr'
import { AiFillStar } from 'react-icons/ai'

import { testimonialSectionStyles, rowStyles, cardStyles, userSvg } from './testimonial_section.module.scss'

const TestimonialSection = () => {


    return (
        <section id='testimonials' className={testimonialSectionStyles}>
            <h2>Zajednajte si u nás termín</h2>

            <div className={rowStyles}>
                <div className={cardStyles}>
                    <GrUserFemale className={userSvg} />
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus veritatis eaque non quasi assumenda nemo.</p>
                    <span>- Jasmine Doe</span>
                </div>
                <div className={cardStyles}>
                    <GrUserFemale className={userSvg} />
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus veritatis eaque non quasi assumenda nemo.</p>
                    <span>- Jasmine Doe</span>
                </div>
                <div className={cardStyles}>
                    <GrUserFemale className={userSvg} />
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus veritatis eaque non quasi assumenda nemo.</p>
                    <span>- Jasmine Doe</span>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection

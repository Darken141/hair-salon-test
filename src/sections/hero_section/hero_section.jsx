import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'

import { heroSectionStyles, headingContainerStyles, backgroundSliderStyles } from './hero_section.module.scss'
import CustomButton from '../../components/button/button'

const HeroSection = () => {
    const heroHeadings = [
        {
            heading: "You’ll love what you see.",
            subHeading: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo."
        },
        {
            heading: "It’s your time to shine.",
            subHeading: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi."
        },
        {
            heading: "Reveal your true self. ",
            subHeading: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion."
        },
    ]


    return (
        <section id="hero" className={heroSectionStyles}>
            <BackgroundSlider
                className={backgroundSliderStyles}
                query={useStaticQuery(graphql`
                    query {
                    backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
                        nodes {
                        relativePath
                        childImageSharp {
                            fluid (maxWidth: 4000, quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                        }
                    }
                    }
                `)}
                initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
                transition={2} // transition duration between images
                duration={8} // how long an image is shown
                // specify images to include (and their order) according to `relativePath`
                images={["img-1a.png", "img-2a.png", "img-3a.png"]}

                // pass down standard element props
                style={{
                    // transform: "rotate(-2deg) scale(.9)",
                }}
            >
                {/* Captions in sync with background images*/}
                {
                    heroHeadings.map(({ heading, subHeading }, idx) => {
                        return (
                            <div
                                key={idx}
                                className={headingContainerStyles}
                                data-sal="slide-right"
                                data-sal-duration="1800"
                            >
                                <h1>{heading}</h1>
                                <h2>{subHeading}</h2>
                                <CustomButton>Zistiť viac</CustomButton>
                            </div>
                        )
                    })
                }

            </BackgroundSlider>
        </section >
    )
}

export default HeroSection

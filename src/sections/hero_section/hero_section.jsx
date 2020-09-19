import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'

import { heroSectionStyles, headingContainerStyles } from './hero_section.module.scss'
import CustomButton from '../../components/button/button'

const HeroSection = () => {
    return (
        <section id="hero" className={heroSectionStyles}>
            <BackgroundSlider
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
                images={["img-1.jpg", "img-2.jpg", "img-3.jpg"]}

                // pass down standard element props
                style={{
                    // transform: "rotate(-2deg) scale(.9)",
                }}
            >
                {/* Captions in sync with background images*/}
                <div className={headingContainerStyles}>
                    <h1>It’s your time to shine.</h1>
                    <h2>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi.</h2>
                    <CustomButton>Zistiť viac</CustomButton>
                </div>
                <div className={headingContainerStyles}>
                    <h1>Reveal your true self. </h1>
                    <h2>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion.</h2>
                    <CustomButton>Zistiť viac</CustomButton>

                </div>
                <div className={headingContainerStyles}>
                    <h1>You’ll love what you see. </h1>
                    <h2>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo.</h2>
                    <CustomButton>Zistiť viac</CustomButton>

                </div>
            </BackgroundSlider>
        </section >
    )
}

export default HeroSection

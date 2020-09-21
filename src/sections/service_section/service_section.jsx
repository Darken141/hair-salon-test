import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'


import { serviceSectionStyles, containerStyles, rowStyles, imageContainerStyles } from './service_section.module.scss'

const ServiceSection = () => {
  const { allFile: { nodes } } = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "services"}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)


  return (
    <section id="services" className={serviceSectionStyles}>
      {
        nodes.map((node, idx) => {
          return (
            <div key={idx} className={rowStyles}>
              <div
                className={imageContainerStyles}
                data-sal="slide-right"
                data-sal-duration="1800"
              >
                <Image fluid={node.childImageSharp.fluid} />
              </div>
              <div
                className={containerStyles}
                data-sal="slide-left"
                data-sal-duration="1800"

              >
                <div>
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat, facilis rem debitis ad, nemo similique fugiat, numquam magnam alias optio id. Odit possimus laudantium iste ratione ipsum ad nesciunt.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maxime?
                  </p>
                </div>
              </div>
            </div>

          )
        })
      }

    </section>
  )
}

export default ServiceSection

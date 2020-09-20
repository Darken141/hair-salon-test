import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { drawerStyles, airdropStyles, navItemStyles, ctaStyles } from './mobile_drawer.module.scss'

const MobileDrawer = ({ handleClick }) => {
    const { site: { siteMetadata: { menuLinks } } } = useStaticQuery(graphql`
    {
      site {
        id
        siteMetadata {
          menuLinks {
            id
            name
            slug
          }
        }
      }
    }
  `)

    return (
        <React.Fragment>
            <div className={drawerStyles}>
                <ul>
                    {
                        menuLinks.map(({ id, name, slug }) => (
                            <li key={id}>
                                <button onClick={() => {
                                    scrollTo(slug)
                                    return handleClick()
                                }} className={navItemStyles} >{name}</button>
                            </li>
                        ))
                    }
                    <li>
                        <button onClick={() => {
                            scrollTo("#kontakt")
                            return handleClick()
                        }} className={ctaStyles}>Objednať sa</button>
                    </li>
                </ul>
            </div>
            <div className={airdropStyles} onClick={handleClick} />
        </React.Fragment>
    )
}

export default MobileDrawer

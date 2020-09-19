import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import MobileNavButton from '../mobile_nav_button/mobile_nav_button'
import MobileDrawer from '../mobile_drawer/mobile_drawer'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { showStyles, hideStyles, logoContainerStyles, navBarStyles, navItemStyles, ctaStyles } from './header.module.scss'

const Header = () => {
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

  const [prevScrollpos, setPrevScrollpos] = useState(null)
  const [showNav, setShowNav] = useState(true)
  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    setPrevScrollpos(window.pageYOffset)
  }, [])

  useEffect(() => {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
      setPrevScrollpos(currentScrollPos)
    }
  })

  return (
    <React.Fragment>
      <header className={showNav ? showStyles : hideStyles}>
        <div className={logoContainerStyles}>
          Logo
        </div>
        <nav className={navBarStyles}>
          <ul>
            {
              menuLinks.map(({ id, name, slug }) => (
                <li key={id}>
                  <button onClick={() => scrollTo(slug)} className={navItemStyles} >{name}</button>
                </li>
              ))
            }
            <li>
              <button onClick={() => scrollTo("#kontakt")} className={ctaStyles}>Objednat sa</button>
            </li>
          </ul>
        </nav>
        <MobileNavButton handleClick={() => setShowDrawer(true)} />
      </header>

      { showDrawer && <MobileDrawer handleClick={() => setShowDrawer(false)} />}
    </React.Fragment>
  )
}

export default Header

import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { footerStyles, watermark } from './footer.module.scss'
import CustomInput from '../input/input'
import CustomButton from '../button/button'

const Footer = () => {
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

    const [email, setEmail] = useState('')

    return (
        <footer className={footerStyles}>
            <div>
                <h4>Sitemap</h4>
                <ul>
                    {
                        menuLinks.map(({ id, name, slug }) => (
                            <li key={id}>
                                <button onClick={() => scrollTo(slug)} >{name}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <h4>Addresa</h4>
                <address>
                    Pokemonová 151<br />
                    915 01 Nové Pallet Town nad Váhom <br />
                    Slovensko
                    <br /> <br />
                    +421 123 456 789 <br />
                    <a href="mailto:predajnapraktik@outlook.sk">
                        predajnapraktik@outlook.sk
                    </a>
                </address>
            </div>

            <div>
                <h4>Newsletter</h4>
                <p>Nezmeškajte naše akciové ponuky a budte v obraze.</p>
                <CustomInput
                    name='email'
                    type='email'
                    handleChange={e => setEmail(e.target.value)}
                    value={email}
                    label='E-mail*'
                    required
                />
                <CustomButton>Odoberať</CustomButton>
            </div>
            <span className={watermark}>
                &copy; 2020 Richard Humel
            </span>
        </footer>
    )
}

export default Footer

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import HeroSection from '../sections/hero_section/hero_section'
import ServiceSection from '../sections/service_section/service_section'
import ContactSection from '../sections/contact_section/contact_section'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <ServiceSection />
    <ContactSection />
  </Layout>
)

export default IndexPage

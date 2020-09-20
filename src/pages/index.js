import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import HeroSection from '../sections/hero_section/hero_section'
import FeaturedServices from '../sections/featured_services/featured_services'
import ServiceSection from '../sections/service_section/service_section'
import TestimonialSection from '../sections/testimonial_section/testimonial_section'
import ContactSection from '../sections/contact_section/contact_section'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <FeaturedServices />
    <ServiceSection />
    <TestimonialSection />
    <ContactSection />
  </Layout>
)

export default IndexPage

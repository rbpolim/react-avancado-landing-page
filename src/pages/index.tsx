import React from 'react'
import { GetStaticProps } from 'next'

import client from 'graphql/client'

import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'

import { LandingPageProps } from 'types/api'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

const Index = ({ data }: LandingPageProps) => {
  const logo = data.attributes.logo
  const header = data.attributes.header
  const sectionAboutProject = data.attributes.sectionAboutProject
  const sectionTech = data.attributes.sectionTech
  const sectionConcepts = data.attributes.sectionConcepts
  const sectionModules = data.attributes.sectionModules
  const sectionAgenda = data.attributes.sectionAgenda
  const pricingBox = data.attributes.pricingBox
  const sectionAboutUs = data.attributes.sectionAboutUs
  const sectionReviews = data.attributes.sectionReviews
  const sectionFaq = data.attributes.sectionFaq

  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject {...sectionAboutProject} />
      <SectionTech {...sectionTech} />
      <SectionConcepts {...sectionConcepts} />
      <SectionModules {...sectionModules} />
      <SectionAgenda {...sectionAgenda} />
      <PricingBox {...pricingBox} />
      <SectionAboutUs {...sectionAboutUs} />
      <SectionReviews {...sectionReviews} />
      <SectionFaq {...sectionFaq} />
      <Footer />
      <JsonSchema />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index

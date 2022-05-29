export type TechIconsProps = {
  title: string
  icon: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SocialLinksProps = {
  title: string
  url: string
}

export type AuthorsProps = {
  attributes: {
    photo: {
      data: {
        attributes: {
          alternativeText: string
          url: string
        }
      }
    }
    name: string
    role: string
    socialLinks: SocialLinksProps[]
    description: string
  }
}

export type ConceptsProps = {
  title: string
}

export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type ReviewsProps = {
  photo: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
  name: string
  text: string
}

export type ModulesProps = {
  title: string
  subtitle: string
  description: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptsProps[]
}

export type SectionModulesProps = {
  title: string
  modules: ModulesProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: string
  numberInstallments: string
  priceInstallment: string
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: {
    data: AuthorsProps[]
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type LandingPageProps = {
  data: {
    attributes: {
      logo: LogoProps
      header: HeaderProps
      sectionAboutProject: SectionAboutProjectProps
      sectionTech: SectionTechProps
      sectionConcepts: SectionConceptsProps
      sectionModules: SectionModulesProps
      sectionAgenda: SectionAgendaProps
      pricingBox: PricingBoxProps
      sectionAboutUs: SectionAboutUsProps
      sectionReviews: SectionReviewsProps
    }
  }
}

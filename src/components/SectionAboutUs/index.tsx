import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import content from './content'

import { SectionAboutUsProps } from 'types/api'

import * as S from './styles'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.data.map(({ attributes }) => (
        <ProfileCard
          key={attributes.name}
          name={attributes.name}
          role={attributes.role}
          image={attributes.photo.data.attributes}
          socialLinks={attributes.socialLinks}
          description={attributes.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs

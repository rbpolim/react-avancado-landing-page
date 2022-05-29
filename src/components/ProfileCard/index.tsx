import React from 'react'
import { SocialLinksProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}

type Props = {
  name: string
  role: string
  image: {
    alternativeText: string
    url: string
  }
  socialLinks: SocialLinksProps[]
  description: string
}

const ProfileCard = ({
  name,
  role,
  image,
  socialLinks,
  description
}: Props) => {
  console.log(socialLinks)

  return (
    <S.Card key={name}>
      <S.Image>
        <img
          src={getImageUrl(image.url)}
          loading="lazy"
          alt={image.alternativeText}
        />
      </S.Image>
      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
      <S.SocialLinks>
        {socialLinks.map(({ title, url }) => (
          <S.Link key={title}>
            <a href={url} title={title}>
              {icons[title]}
            </a>
          </S.Link>
        ))}
      </S.SocialLinks>
      <S.Description>{description}</S.Description>
    </S.Card>
  )
}

export default ProfileCard

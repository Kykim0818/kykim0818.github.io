import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
// const PROFILE_IMAGE_LINK =
//   'https://file.notion.so/f/s/5b975795-2142-46f8-9468-e581b828f8f7/Profile1.jpg?id=9c5d2bf8-8bcb-4c76-894d-7c7d4215cc99&table=block&spaceId=0623b50f-3167-4a05-9780-4bb9769f0e04&expirationTimestamp=1687762403009&signature=dCniMHGpqU_6_wQZYRYAFt0aFuBX49GuCsEqzrfDbEU&downloadName=Profile1.jpg'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

export default ProfileImage

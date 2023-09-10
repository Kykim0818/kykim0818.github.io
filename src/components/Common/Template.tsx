import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="Kykim0818" />
        <meta name="twitter:creator" content="Kykim0818" />

        <html lang="ko" />

        <meta
          name="google-site-verification"
          content="v9RrH29eHGSdzfQBnukif4jmqgXPZPh2L0-1dfX_j-0"
        />

        <meta
          name="naver-site-verification"
          content="6d59d2fd2bc07e889075342aff6d375dfdce90dc"
        />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default Template

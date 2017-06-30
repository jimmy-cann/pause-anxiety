import React, { Component } from 'react'
import Helmet from 'react-helmet';

import bgImg from './home.png'
import TopSection from '../TopSection/template'

import ThreePointCta from '../ThreePointCta/template'
import DarkFooter from '../DarkFooter/template'

import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 1000px;
  min-height: calc(100vh - 500px);
`;

const meta = {
  title: 'Pause Anxiety',
  description: 'TBA',
  url: 'https://pause-anxiety.com'
}

const tsProps = {
  bgImg: bgImg,
  header: 'Pause Anxiety',
  logo: true,
  button: false,
  subhead: 'Support to help you get through a hard time'
}

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet
            title={meta.title}
            meta={[
              {'name': 'description', 'content': meta.description},
              {'property': 'og:type', 'content': 'article'},
              {'property': 'og:title', 'content': meta.title},
              {'property': 'og:description', 'content': meta.description},
              {'property': 'og:image', 'content': bgImg},
              {'property': 'og:url', 'content': meta.url},
              {'property': 'twitter:card', 'content': 'article'},
              {'property': 'twitter:title', 'content': meta.title},
              {'property': 'twitter:description', 'content': meta.description},
              {'property': 'twitter:image', 'content': bgImg},
              {'property': 'twitter:url', 'content': meta.url}
            ]}/>
        <TopSection bgImg={tsProps.bgImg}
                    header={tsProps.header}
                    logo={tsProps.logo}
                    button={tsProps.button}
                    subhead={tsProps.subhead}></TopSection>
        <ThreePointCta></ThreePointCta>
        <DarkFooter></DarkFooter>
      </Wrapper>
    )
  }
}

export default Home

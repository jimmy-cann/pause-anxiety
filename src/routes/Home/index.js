import React, { Component } from 'react'
import Helmet from 'react-helmet';

import TopSection from '../../components/TopSection'

import InfoBlock from '../../components/InfoBlock'
import Footer from '../../components/Footer'

import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 1000px;
  min-height: calc(100vh - 500px);
  margin-bottom: 130px;
`;

const meta = {
  title: 'Pause Anxiety',
  description: 'TBA',
  url: 'https://pause-anxiety.com'
}

const tsProps = {
  // bgImg: bgImg,
  header: 'Pause Anxiety',
  logo: true,
  button: false,
  subhead: 'Support to help you get through a hard time'
}

const contentBlocks = [{
  heading: 'How It Works',
  content: [
    'The Pause Anxiety app is a bot designed to respond to you when you start to feel anxious. Our goal is to prevent the attack, or reduce your stress level enough through distractions to get you to a safer space.',
    'The app is integrated into Facebook Messenger, just head to the Facebook page and start chatting.'
  ]
}, {
  heading: 'Anonymous Support',
  content: [
    'Talking to a real person can sometimes induce more stress than what is necessary. Pause Anxiety is not a real person. Unlike the support bot at your telco, we believe this may be quite a benefit.',
    'Pause Anxiety is always available to you to help. No matter the location, no matter the time, Pause Anxiety will support you because it never rests.'
  ]
}, {
  heading: 'Easy Interaction',
  content: [
    'You can talk as little or as much as you need with Pause Anxiety, it won\'t be offended if you need to stop.',
    'Certain words will produce encouragement or explanation to help relax your fears. Distraction games will try to bring your stress level down.'
  ]
}]

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
              // {'property': 'og:image', 'content': bgImg},
              {'property': 'og:url', 'content': meta.url},
              {'property': 'twitter:card', 'content': 'article'},
              {'property': 'twitter:title', 'content': meta.title},
              {'property': 'twitter:description', 'content': meta.description},
              // {'property': 'twitter:image', 'content': bgImg},
              {'property': 'twitter:url', 'content': meta.url}
            ]}/>
        <TopSection bgImg={tsProps.bgImg}
                    header={tsProps.header}
                    logo={tsProps.logo}
                    button={tsProps.button}
                    subhead={tsProps.subhead}></TopSection>
        { contentBlocks.map((block, index) => {
          return (
            <InfoBlock justify={ index % 2 === 0 ? 'flex-start' : 'flex-end' }
                       heading={ block.heading }
                       content={ block.content }></InfoBlock>
          )
        }) }
        <InfoBlock justify="center"
                   heading="See Pause Anxiety In Action"></InfoBlock>
        <Footer></Footer>
      </Wrapper>
    )
  }
}

export default Home

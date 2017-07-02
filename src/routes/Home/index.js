import React, { Component } from 'react'
import Helmet from 'react-helmet';

import TopSection from '../../components/TopSection'
import InfoBlock from '../../components/InfoBlock'
import BlueButton from '../../components/BlueButton'
import Footer from '../../components/Footer'

import styled from 'styled-components'
import shortid from 'shortid'
import ReactPlayer from 'react-player'

const Wrapper = styled.div`
  min-height: 1000px;
  min-height: calc(100vh - 500px);
  margin-bottom: 130px;
`;

const VideoWrapper = styled.div`
  > div {
    margin: 0 auto;
    height: 100%!important;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  padding 40px;
`;

const meta = {
  title: 'Pause Anxiety',
  description: 'TBA',
  url: 'https://pause-anxiety.com'
}

const tsProps = {
  // bgImg: bgImg,
  header: 'Pause Anxiety',
  logo: false,
  button: true,
  subhead: 'Support to help you get through a hard time'
}

const contentBlocks = [{
  heading: 'What is Pause Anxiety?',
  content: [
    'The Pause Anxiety app is designed to help with the feelings and thoughts that come with an anxiety attack.',
    'The app works by helping to not only identify the feelings you are having but also offer strategies to help cope during an anxiety attack through the use of conversation and distraction.',
    'The app is integrated into Facebook Messenger, just head to the Facebook page and start chatting.'
  ]
}, {
  heading: 'Increase Your Confidence',
  content: [
    'Talking to Pause Anxiety during an anxiety attack will show you that you are strong enough to get through difficult situations, you once thought you could not face.',
    'Every time you get through an anxiety episode you will become stronger and more confident.'
  ]
}, {
  heading: 'Anonymous Support',
  content: [
    'Pause Anxiety is always available to help and support you during an anxiety attack. The app is discreet and looks just a message with a friend.',
    'Talking to a real person can sometimes induce more stress than what is necessary. Pause Anxiety is not a real person. Unlike the support bot at your telco, we believe this may be quite a benefit.',
    'Pause Anxiety is always available to you to help. No matter the location, no matter the time, Pause Anxiety will support you because it never rests.'
  ]
}, {
  heading: 'Easy Interaction',
  content: [
    'Pause Anxiety is simple to use and you can interact with it as you like. Pause Anxiety will respond with a single word or can offer a long conversation depending on your needs.',
    'Certain words will produce encouragement or explanation to help ease your fears while distraction games will try to bring your stress level down.'
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
        { contentBlocks.map((block, index) => (
            <InfoBlock key={ shortid.generate() }
                       justify={ index % 2 === 0 ? 'flex-start' : 'flex-end' }
                       heading={ block.heading }
                       content={ block.content }></InfoBlock>
        )) }
        <InfoBlock justify="center"
                   heading="See Pause Anxiety In Action">
        </InfoBlock>
        <VideoWrapper>
          <ReactPlayer url='https://www.facebook.com/pause.anxiety/videos/247619069063674/' />
        </VideoWrapper>
        <ButtonWrapper>
          <BlueButton text="START CHATTING" link="https://www.facebook.com/pause.anxiety"></BlueButton>
        </ButtonWrapper>
        <Footer></Footer>
      </Wrapper>
    )
  }
}

export default Home

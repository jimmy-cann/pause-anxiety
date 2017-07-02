import React, { Component } from 'react'
import Helmet from 'react-helmet';

import TopSection from '../../components/TopSection'
import InfoBlock from '../../components/InfoBlock'
import BlueButton from '../../components/BlueButton'
import Footer from '../../components/Footer'

import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 1000px;
  min-height: calc(100vh - 500px);
  margin-bottom: 130px;
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
  subhead: 'About Pause Anxiety'
}

const contentBlocks = [{
  heading: 'How does it Work?',
  content: [
    'Pause Anxiety runs through facebook messenger and looks just like a conversation with a friend.',
    'It acts as a distraction during an anxiety attack through distraction games and conversation to reduce anxiety.',
    'The bot is built using Amazon Lex natural speech recognition for entry into the 2017 Amazon Chatbot Challenge'
  ]
}]

const AboutAuthorsHead = styled.h2`
  text-align: center;
  padding: 40px;
`
const aboutAuthors = [{
  heading: 'Paul Thoonen',
  content: [
    'At the age of 20 I was diagnosed with anxiety & minor depression. For many of those years I was ashamed, embarrassed and scared. I was extremely lucky to have (my then girlfriend, now wife) Nic by my side helping me through.',
    'It took a number of years of trial and error for us to figure out what Nic should/shouldn’t say to me during an attack. If i was ever in the shops or by myself I knew i could call Nic and she would help me; "Take your time", "If you need to leave that is ok",  "You are not a disappointment".',
    'One cold Sunday morning me and Jimmy were talking about how to help me during anxiety. My answer: "I don’t need help, I have Nic". With that we decided we wanted to give everyone with anxiety the chance to have their own Nic... Pause Anxiety.'
  ]
}, {
  heading: 'Jimmy Cann',
  content: [
    'A full-stack developer looking for a side project to learn about the up-and-coming Lex technology from AWS.',
    'While mulling ideas for a project to base my entry into the 2017 AWS Chatbot Challenge, my main criteria being that it had to help people.',
    'Fortuitously I happened to be meeting Paul the very next morning, where we got onto the discussion regarding his battle with anxiety.'
  ]
}]

class About extends Component {
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
            <InfoBlock justify={ index % 2 === 0 ? 'flex-start' : 'flex-end' }
                       heading={ block.heading }
                       content={ block.content }></InfoBlock>
        )) }
        <ButtonWrapper>
          <BlueButton text="START CHATTING" link="https://www.facebook.com/pause.anxiety"></BlueButton>
        </ButtonWrapper>
        <AboutAuthorsHead>About the Authors</AboutAuthorsHead>
        { aboutAuthors.map((block, index) => (
            <InfoBlock justify={ index % 2 === 0 ? 'flex-start' : 'flex-end' }
                       heading={ block.heading }
                       content={ block.content }></InfoBlock>
        )) }
        <Footer></Footer>
      </Wrapper>
    )
  }
}

export default About

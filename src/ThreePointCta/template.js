import React, { Component } from 'react'
import cloud from './cloud.svg'
import server from './server.svg'
import web from './web.svg'

import media from '../MediaQueries'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${media.gtxs`
  `}
`

const Container = styled.div`
  max-width: 1280px;
  padding: 40px 40px 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  ${media.gtxs`
    padding: 40px;
    flex-wrap: nowrap;
  `}
`

const Point = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 0 20px;
  ${media.gtxs`
    padding: 0 40px 10px;
    max-width: 50%;
  `}
  ${media.gtsm`
    max-width: 30%;
  `}
  > h2 {
    margin: 10px 0;
  }
  > p {
    margin-top: 0;
  }
  > div {
    padding-top: 0;
    padding-bottom: 20px;
    > a {
      max-width: 100px;
      margin: 0 auto;
    }
  }
`

class ThreePointCta extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Point>
            <h2>How It Works</h2>
            <p>The Pause Anxiety app is a bot designed to respond to you when you start to feel anxious. Our goal is to prevent the attack, or reduce your stress level enough through distractions to get you to a safer space.</p>
            <p>The app is integrated into Facebook Messenger, just head to the Facebook page and start chatting.</p>
          </Point>
        </Container>
      </Wrapper>
    )
  }
}

export default ThreePointCta

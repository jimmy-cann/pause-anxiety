import React, { Component } from 'react'
// import Logo from './jc.png'
import TopMenu from '../TopMenu'
import BlueButton from '../BlueButton'
import AngleDiv from '../AngleDiv'

import media from '../../services/MediaQueries'
import styled from 'styled-components'

class TopSection extends Component {
  render() {
    const Wrapper = styled.div`
      max-width: 100%;
      min-height: 425px;
    `
    return (
      <Wrapper>
        <Inner>
          <TopMenu></TopMenu>
          <Container>
            <Header>{this.props.header}</Header>
            <p>{this.props.subhead}</p>
            { this.props.button ? <BlueButton text="START CHATTING" link="https://www.facebook.com/pause.anxiety"></BlueButton> : null }
            <AngleDiv rotation="60"></AngleDiv>
            <AngleDiv rotation="-15"></AngleDiv>
          </Container>
        </Inner>
      </Wrapper>
    )
  }
}

export default TopSection

const Inner = styled.div`
  max-width: 100%;
  min-height: 425px;
`

const Container = styled.div`
  text-align: center;
  max-width: 100%;
  padding: 0 20px 40px;
  margin: 50px 0;
  ${media.gtxs`
    padding: 0 40px 40px;
  `}
  > p {
    color: #fff;
    font-weight: 600;
    max-width: 700px;
    margin: 20px auto 0;
    padding-bottom: 40px;
  }
`

const Header = styled.h1`
  color: #fff;
  font-size: 2.25em;
  ${media.gtxs`
    margin: 20px 0;
    font-size: 3em;
  `}
`

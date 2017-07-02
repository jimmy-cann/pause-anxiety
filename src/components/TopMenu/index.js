import React, { Component } from 'react'
import { Link } from 'react-router'
import SocialButtons from '../SocialButtons'
import MobileMenu from '../MobileMenu'

import media from '../../services/MediaQueries'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 100%;
  height: 75px;
  background-color: transparent;
`

const Container = styled.div`
  text-align: left;
  display: flex;
  max-width: 100%;
  padding: 0 20px;
  ${media.gtxs`
    padding: 0 40px;
  `}
  > p {
    color: #fff;
  }
  > .social-buttons {
    display: none;
    ${media.gtxs`
      display: flex;
    `}
  }
`

const LeftSection = styled.div`
  width: 100%;
  > a {
    font-weight: 700;
    line-height: 75px;
    text-decoration: none;
    color: #fff;
    padding: 0 20px;
    &:hover {
      color: #2196f3;
    }
  }
`

const RightSection = styled.div`
  display: none;
  ${media.gtsm`
    display: flex;
    width: 100%;
    text-align: right;
    > a {
      font-weight: 700;
      line-height: 75px;
      text-decoration: none;
      color: #fff;
      padding: 0 20px;
      &:first-child {
        margin-left: auto;
      }
      &:hover {
        color: #2196f3;
      }
    }
  `}
`

const RightSectionMobile = styled.div`
  display: flex;
  max-width: 100%;
  text-align: right;
  line-height: 75px;
  > div {
    height: 75px;
    margin-left: auto;
    padding: 0 10px;
    cursor: pointer;
    fill: #fff;
    &:hover {
      fill: #2196f3;
    }
    > svg {
      padding-top: 21px;
      fill: inherit;
      > g {
        fill: inherit;
      }
    }
  }
  ${media.gtxs``}
  ${media.gtsm`
    display: none;
  `}
`

class TopMenu extends Component {
  constructor() {
    super()
    this.state = {
      slide: ''
    }
  }
  slideToggle() {
    let slide = ''
    if (!this.state.slide) slide = 'slide'
    this.setState({ slide: slide })
  }
  render() {
    return (
      <Wrapper>
        <Container>
          <LeftSection>
            <Link to="/">PAUSE ANXIETY</Link>
          </LeftSection>
          <RightSection>
            <Link to="/about">ABOUT</Link>
            <Link to="/blog">BLOG</Link>
          </RightSection>
          <RightSectionMobile>
            <div onClick={this.slideToggle.bind(this)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <g fill="#FFF">
                    <path d="M3 18h18v-2H3v2z"/><path d="M3 13h18v-2H3v2z"/><path d="M3 6v2h18V6H3z"/>
                  </g>
              </svg>
            </div>
          </RightSectionMobile>
          <SocialButtons></SocialButtons>
        </Container>
        <MobileMenu slide={this.state.slide}></MobileMenu>
      </Wrapper>
    )
  }
}

export default TopMenu

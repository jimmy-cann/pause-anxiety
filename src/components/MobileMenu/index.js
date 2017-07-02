import React, { Component } from 'react'
import { Link } from 'react-router'

import media from '../../services/MediaQueries'
import styled from 'styled-components'

class MobileMenu extends Component {
  render() {
    return (
      <Wrapper className={this.props.slide}>
        <div>
          <Link to="/about">ABOUT</Link>
          <Link to="/blog">BLOG</Link>
        </div>
      </Wrapper>
    )
  }
}

export default MobileMenu

const Wrapper = styled.div`
  width: 100%;
  height: 25px;
  background-color: transparent;
  text-align: center;
  position: fixed;
  right: -100%;
  ${media.sm`
    width: auto;
  `}
  > div {
    > a {
      line-height: 25px;
      font-weight: 700;
      text-decoration: none;
      color: #fff;
      padding: 0 10px;
    }
    > a:hover {
      color: #2196f3;
    }
  }
  &.slide {
    background-color: rgba(0,0,0,.1);
    height: 25px;
    animation-name: menuSlideIn;
    animation-duration: .2s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    position: absolute;
    right: 0;
  }
`

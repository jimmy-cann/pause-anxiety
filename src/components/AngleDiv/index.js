import React, { Component } from 'react'

import media from '../../MediaQueries'
import styled from 'styled-components'

class AngleDiv extends Component {
  render() {
    console.log(this.props)
    const Wrapper = styled.div`
      min-height: 800px;
      width: 250%;
      position: absolute;
      background-color: rgba(33, 150, 243, 0.5);
      top: ${this.props.top || '-500px'};
      left: ${this.props.left || '-700px'};
      transform: rotate(${this.props.rotation}deg);
      z-index: -1;
      ${media.xs`
        left: -400px;
      `}
    `;
    return (
      <Wrapper></Wrapper>
    )
  }
}

export default AngleDiv

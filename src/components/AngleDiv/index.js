import React, { Component } from 'react'

import styled from 'styled-components'

class AngleDiv extends Component {
  render() {
    console.log(this.props)
    const Wrapper = styled.div`
      min-height: 800px;
      width: 250%;
      position: absolute;
      background-color: rgba(33, 150, 243, 0.5);
      top: -500px;
      left: -700px;
      transform: rotate(${this.props.rotation}deg);
      z-index: -1;
    `;
    return (
      <Wrapper></Wrapper>
    )
  }
}

export default AngleDiv

import React, { Component } from 'react'

import media from '../../services/MediaQueries'
import styled from 'styled-components'

const Point = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 0 20px;
  ${media.gtxs`
    padding: 0 40px 10px;
    max-width: 50%;
  `}
  ${media.gtsm`
    max-width: 40%;
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

class InfoBlock extends Component {
  render() {
    const Container = styled.div`
      max-width: 1280px;
      padding: 40px 40px 0;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: ${this.props.justify || 'flex-start'};
      ${media.gtxs`
        padding: 40px;
        flex-wrap: nowrap;
      `}
    `
    const content = this.props.content || []
    return (
      <Container>
        <Point>
          <h2>{this.props.heading}</h2>
          { content.map(para => (<p>{para}</p>)) }
        </Point>
      </Container>
    )
  }
}

export default InfoBlock

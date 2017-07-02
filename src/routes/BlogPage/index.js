import React, { Component } from 'react'
import Helmet from 'react-helmet'

import TopSection from '../../components/TopSection'
import Footer from '../../components/Footer'

import styled from 'styled-components'

class BlogPage extends Component {
  render() {
    const postDate = this.props.params.year + '-' + this.props.params.month + '-' + this.props.params.day
    const postRoute = postDate + '-' + this.props.params.slug
    const blog = require('markdown-with-front-matter!../_posts/' + postRoute + '.md')
    const tsProps = {
      bgImg: blog.image || '/img/blog.png',
      header: blog.title,
      logo: false,
      button: false,
      subhead: blog.subhead
    }
    return (
      <Wrapper>
        <Helmet
            title={blog.title + ' - Pause Anxiety'}
            meta={[
              {'name': 'description', 'content': blog.subhead},
              {'property': 'og:type', 'content': 'article'},
              {'property': 'og:title', 'content': blog.title + ' - Pause Anxiety'},
              {'property': 'og:description', 'content': blog.subhead},
              {'property': 'og:image', 'content': blog.image || '/img/blog.png'},
              {'property': 'og:url', 'content': 'https://pause-anxiety.com/' + postRoute},
              {'property': 'twitter:card', 'content': 'article'},
              {'property': 'twitter:title', 'content': blog.title + ' | Pause Anxiety'},
              {'property': 'twitter:description', 'content': blog.subhead},
              {'property': 'twitter:image', 'content': blog.image || '/img/blog.png'},
              {'property': 'twitter:url', 'content': 'https://pause-anxiety.com/' + postRoute}
            ]}
        />
        <TopSection bgImg={tsProps.bgImg}
                    header={tsProps.header}
                    logo={tsProps.logo}
                    button={tsProps.button}
                    subhead={tsProps.subhead}></TopSection>
        <Container>
          <div className='markdown-body' dangerouslySetInnerHTML={{__html: blog.__content}}></div>
          <br/><br/>
          <span>Originally posted on {new Date(postDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} by {blog.author}</span>
        </Container>
        <Footer></Footer>
      </Wrapper>
    )
  }
}

export default BlogPage

const Wrapper = styled.div`
  max-width: 100%;
  > a {
    margin: 10px;
  }
`

const Container = styled.div`
  max-width: 700px;
  padding: 10px 40px 40px;
  margin: 0 auto;
`

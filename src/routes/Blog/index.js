import React, { Component } from 'react'
import Helmet from 'react-helmet'

import BlogTile from './BlogTile'
import TopSection from '../../components/TopSection'
import Footer from '../../components/Footer'

import media from '../../services/MediaQueries'
import styled from 'styled-components'

class Blog extends Component {
  render() {
    const webpackRequireContext = require.context('markdown-with-front-matter!../_posts', false, /\.md$/)
    const blogs = webpackRequireContext.keys().sort().reverse().reduce((memo, fileName) => {
      // frontmatter and content (actual markdown is loaded on '__content', frontmatter is right on root)
      const frontMatterMarkdown = webpackRequireContext(fileName)
      // remove cd and extension
      fileName = fileName.match(/\.\/([^.]+)\.*/)[1];
      // extract year and path
      let tokenizedFilename = fileName.match(/^(\d{4}-\d{2}-\d{2})(.*)/)
      if (!tokenizedFilename && !tokenizedFilename[1]) throw new Error('no ^YYYY-MM-DD date in blog filename')
      let date = tokenizedFilename[1]
      let jekyllPath = date.split('-').join('/') + tokenizedFilename[2].replace(/^-/, '/')
      return memo.set(jekyllPath, Object.assign({date: date}, frontMatterMarkdown))
    }, new Map())
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
            ]}
        />
        <TopSection bgImg={tsProps.bgImg}
                    header={tsProps.header}
                    logo={tsProps.logo}
                    button={tsProps.button}
                    subhead={tsProps.subhead}></TopSection>
        <Container>
          { [...blogs.keys()].map(path => (
            <BlogTile key={path} path={path} blog={blogs.get(path)}></BlogTile>
          )) }
        </Container>
        <Footer></Footer>
      </Wrapper>
    )
  }
}

export default Blog

const tsProps = {
  // bgImg: bgImg,
  header: 'Pause Anxiety Blog',
  logo: true,
  button: false,
  subhead: 'News and Guides for getting you through the dark times'
}

const Wrapper = styled.div`
  max-width: 100%;
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 5px 10px;
  ${media.sm`
    padding: 10px 20px;
  `}
  ${media.gtsm`
    padding: 20px 40px;
  `}
`

const meta = {
  title: 'Blog - Pause Anxiety',
  description: 'Dev Blog - Obligatory repository of code ideas and guides',
  url: 'https://pause-anxiety.com/blog'
}

import 'babel-polyfill'; // this is for < IE11
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Home from './routes/Home'
import Blog from './routes/Blog'
import BlogPage from './routes/BlogPage'
import About from './routes/About'

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/blog/:year/:month/:day/:slug" component={ BlogPage }/>
        <Route path="/blog" component={ Blog }/>
        <Route path="/about" component={ About }/>
        <Route path="*" component={ Home }/>
      </Router>
    )
  }
}

export default App

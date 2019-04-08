import React, { Component } from 'react';
import './assets/styles/app.scss'
import SharedButton from './components/SharedButton.js'
import Header from './components/Header.js'
import ListPosts from './components/ListPosts.js'
import { connect } from 'react-redux';
import { index } from './store/actions/posts.js'
import Headline from './components/Headline.js'
class App extends Component {
  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.props.indexPosts
    }
    return (
      <div className="App" data-test="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" />
          <SharedButton {...configButton} />
          {posts.length > 0 && 
            <div>
              {posts.map((post, index) => {
                const { title, body } = post
                const configListPost = {
                  title,
                  desc: body
                }
                return (
                  <ListPosts key={index} {...configListPost}/>
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, {
  indexPosts: index
})(App);
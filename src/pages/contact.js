import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {TwitterFollowButton} from 'react-twitter-embed';

class BlogPosts extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title;
    const siteAuthor = data.site.siteMetadata.author;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle} author={siteAuthor}>
        <SEO title="Onkar Janwa" />
        <div>
            Hello, I am Onkar. Thank you for visiting my website.
        </div>
        <div>
        <TwitterFollowButton screenName={'onkarjanwa'}/>
        </div>
      </Layout>
    )
  }
}

export default BlogPosts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

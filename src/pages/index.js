import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography";
import styles from '../styles/style.module.css';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title;
    const siteAuthor = data.site.siteMetadata.author;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle} author={siteAuthor}>
        <SEO title="Onkar Janwa" />
        <div className="homepage__container">
          <div><h1>Hi, I'm Onkar Janwa.</h1></div>
          <div>
            <p>
            I am a pragrammer and blogger . Works with people building startups. Living in Jaipur, India.
            </p>
          </div>
          <div className="homepage__container__social">
            <ul>
              <li>
                <a class="hover-underline" target="_blank" rel="noopener noreferrer" href="https://twitter.com/onkarjanwa" id="twitter">
                  <svg width="40" height="40" viewBox="0 0 800 800"><path fill="#000" d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a class="hover-underline" target="_blank" rel="noopener noreferrer" href="https://github.com/onkarjanwa" id="github">
                  <svg width="40" height="40" viewBox="0 0 800 800"><path fill="#000" d="M400 139c144 0 260 116 260 260 0 115-75 213-178 247-9 3-17-2-17-13v-71c0-35-18-48-18-48 57-6 119-28 119-128 0-44-27-70-27-70s14-29-2-69c0 0-22-7-72 27-42-12-88-12-130 0-50-34-72-27-72-27-16 40-2 69-2 69s-27 26-27 70c0 100 62 122 119 128 0 0-14 10-17 35-15 7-53 18-76-22 0 0-13-25-39-27 0 0-26 0-2 16 0 0 17 8 29 38 0 0 16 51 88 35v44c0 11-9 16-18 13-103-34-178-132-178-247 0-144 116-260 260-260z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a class="hover-underline" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/onkarjanwa/" id="linkedin"><svg width="40" height="40" viewBox="0 0 48 56"><path fill="#000" d="M8.421,14h0.052h0C11.263,14,13,12,13,9.5C12.948,6.945,11.263,5,8.526,5C5.789,5,4,6.945,4,9.5  C4,12,5.736,14,8.421,14z"></path><rect x="4" y="17" fill="#000" width="9" height="26"></rect><path fill="#000" d="M44,26.5c0-5.247-4.253-9.5-9.5-9.5c-3.053,0-5.762,1.446-7.5,3.684V17h-9v26h9V28h0  c0-2.209,1.791-4,4-4s4,1.791,4,4v15h9C44,43,44,27.955,44,26.5z"></path></svg></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="recentarticle__container">
          <div className="recentarticle__container__title"><span>Recent Articles</span></div>
          <div>
            {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} className={styles[`article`]}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.tags[0]}</small> . <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

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
            tags
          }
        }
      }
    }
  }
`

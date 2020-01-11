import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "./header.module.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;

  return (
    <header className={styles.header}>
      <div className={styles[`header__wrap`]}>
        <div className={styles[`header__heading`]}>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: 0,
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
              verticalAlign: `middle`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <span>Onkar Janwa</span>
        </div>
        <nav role="main" className={styles[`header__nav`]}>
          <Link to="/" className={styles[`header__link`]}>
            Home
          </Link>
          <Link to="/work" className={styles[`header__link`]}>
            Work
          </Link>
          <Link to="/articles" className={styles[`header__link`]}>
            Articles
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

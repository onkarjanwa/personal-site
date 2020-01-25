import React from "react"
import Header from "./Header";

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { author, children } = this.props;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: `${rhythm(.5)} 0}`,
        }}
      >
        <Header />
        <main>{children}</main>
        <footer className="page__footer">
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="/">{author}</a>
        </footer>
      </div>
    )
  }
}

export default Layout

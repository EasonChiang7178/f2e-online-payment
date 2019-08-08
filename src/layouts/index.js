import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "./GlobalStyles"
import SEO from "./SEO"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <SEO title="九華山 香香農特產" />

    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

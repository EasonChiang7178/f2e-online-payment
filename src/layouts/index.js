import React from "react"
import PropTypes from "prop-types"
import { PoseGroup } from "react-pose"

import GlobalStyles from "./GlobalStyles"
import SEO from "./SEO"
import Header from "./Header"
import { PagePosedWrapper } from "./index.css"

const Layout = ({ children, location }) => (
  <>
    <GlobalStyles />
    <SEO title="九華山 香香農特產" />

    <Header />

    <PoseGroup>
      <PagePosedWrapper key={location.pathname}>
        {children}
      </PagePosedWrapper>
    </PoseGroup>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout

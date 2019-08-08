import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Info } from "./index.css"

const Step = ({ className, children }) => (
  <Wrapper className={className}>
    <Info>{children}</Info>
  </Wrapper>
)

Step.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Step

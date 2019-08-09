import React from "react"
import PropTypes from "prop-types"

import { Button } from "./index.css"

const NextButton = ({ className, disabled, children, onClick }) => {
  return (
    <Button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}

NextButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}
NextButton.defaultProps = {
  disabled: false
}

export default NextButton

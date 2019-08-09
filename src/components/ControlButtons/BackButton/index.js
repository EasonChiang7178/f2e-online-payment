import React from "react"
import PropTypes from "prop-types"

import { Button } from "./index.css"

const BackButton = ({ className, children, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  )
}

BackButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default BackButton

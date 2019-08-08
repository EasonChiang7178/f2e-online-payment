import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Info } from "./index.css"

const ContactInfo = ({ phoneNumber }) => {

  return (
    <Wrapper>
      <Info>{`訂購專線：${phoneNumber}`}</Info>
    </Wrapper>
  )
}

ContactInfo.propTypes = {
  phoneNumber: PropTypes.string.isRequired
}

export default ContactInfo

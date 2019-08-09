import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import BackButton from "./BackButton"
import NextButton from "./NextButton"
import { media } from "../../utils/styledUtils"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

const MobileNextButton = styled(NextButton)`
  ${media.desktop`
    display: none;
  `}
`

const DesktopNextButton = styled(NextButton)`
  display: none;
  
  ${media.desktop`
    display: block;
  `}
`

const OrderPageControls = ({ disableNextButton }) => {
  const handleBackButtonClick = () => {
    navigate("/")
  }
  const handleMobileNextButtonClick = () => {
    if (disableNextButton) return
    navigate("/payment")
  }
  const handleDesktopNextButtonClick = () => {
    if (disableNextButton) return
    navigate("/order-result")
  }

  return (
    <Container>
      <BackButton onClick={handleBackButtonClick}>
        <FontAwesomeIcon icon={faPlus} /> 加購
      </BackButton>

      <MobileNextButton onClick={handleMobileNextButtonClick} disabled={disableNextButton}>
        下一步
      </MobileNextButton>
      <DesktopNextButton onClick={handleDesktopNextButtonClick} disabled={disableNextButton}>
        結帳
      </DesktopNextButton>
    </Container>
  )
}

OrderPageControls.propTypes = {
  disableNextButton: PropTypes.bool
}
OrderPageControls.defaultProps = {
  disableNextButton: false
}

export default OrderPageControls
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { navigate } from "gatsby"

import NextButton from "./NextButton"


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

const PaymentPageControls = ({ disableNextButton }) => {
  const handleBackButtonClick = () => {
    navigate("/order")
  }
  const handleNextButtonClick = () => {
    if (disableNextButton) return
    navigate("/order-result")
  }

  return (
    <Container>
      <NextButton onClick={handleBackButtonClick}>
        上一步
      </NextButton>

      <NextButton onClick={handleNextButtonClick} disabled={disableNextButton}>
        結帳
      </NextButton>
    </Container>
  )
}

PaymentPageControls.propTypes = {
  disableNextButton: PropTypes.bool
}
PaymentPageControls.defaultProps = {
  disableNextButton: false
}

export default PaymentPageControls

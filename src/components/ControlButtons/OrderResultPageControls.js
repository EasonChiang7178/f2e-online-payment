import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { navigate } from "gatsby"

import BackButton from "./BackButton"
import NextButton from "./NextButton"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

const OrderResultPageControls = () => {
  const handleBackButtonClick = () => {
    navigate("/")
  }

  return (
    <Container>
      <BackButton onClick={handleBackButtonClick}>
        繼續購買
      </BackButton>

      <NextButton disabled={true}>
        列印
      </NextButton>
    </Container>
  )
}

export default OrderResultPageControls

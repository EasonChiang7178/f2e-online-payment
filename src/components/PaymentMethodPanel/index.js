import React from "react"
import PropTypes from "prop-types"

import { Step, Wrapper } from "./index.css"
import MethodSelector from "./MethodSelector"
import BuyerInfoForm from "../BuyerInfoForm"


const PaymentMethodPanel = ({ setInputValid }) => {
  return (
    <Wrapper>
      <Step>步驟.3選擇付款方式</Step>

      <MethodSelector />
      <BuyerInfoForm
        setInputValid={setInputValid}
      />
    </Wrapper>
  )
}

PaymentMethodPanel.propTypes = {
  setInputValid: PropTypes.func
}

export default PaymentMethodPanel

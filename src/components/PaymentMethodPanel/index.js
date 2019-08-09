import React from "react"

import { Step, Wrapper } from "./index.css"
import MethodSelector from "./MethodSelector"
import BuyerInfoForm from "../BuyerInfoForm"


const PaymentMethodPanel = () => {
  return (
    <Wrapper>
      <Step>步驟.3選擇付款方式</Step>

      <MethodSelector />
      <BuyerInfoForm />
    </Wrapper>
  )
}

export default PaymentMethodPanel

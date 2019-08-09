import React from "react"

import { Step, Wrapper } from "./index.css"
import MethodSelector from "./MethodSelector"


const PaymentMethodPanel = () => {
  return (
    <Wrapper>
      <Step>步驟.3選擇付款方式</Step>

      <MethodSelector />
    </Wrapper>
  )
}

export default PaymentMethodPanel

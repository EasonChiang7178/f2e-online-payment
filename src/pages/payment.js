import React, { useContext, useState } from "react"
import { navigate } from "gatsby"

import shoppingContext from "../contexts/ShoppingContext"
import PaymentMethodPanel from "../components/PaymentMethodPanel"
import PaymentPageControls from "../components/ControlButtons/PaymentPageControls"

const PaymentPage = () => {
  const { selectedItems } = useContext(shoppingContext)
  if (selectedItems.length === 0) {
    navigate('/')
  }

  const [isInputValid, setInputValid] = useState(false)

  return (
    <>
      <PaymentMethodPanel
        setInputValid={setInputValid}
      />
      <PaymentPageControls
        disableNextButton={!isInputValid}
      />
    </>
  )
}

export default PaymentPage

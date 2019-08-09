import React, { useContext } from "react"
import { navigate } from "gatsby"

import shoppingContext from "../contexts/ShoppingContext"
import PaymentMethodPanel from "../components/PaymentMethodPanel"
import PaymentPageControls from "../components/ControlButtons/PaymentPageControls"

const PaymentPage = () => {
  const { selectedItems } = useContext(shoppingContext)
  if (selectedItems.length === 0) {
    navigate('/')
  }

  return (
    <>
      <PaymentMethodPanel
      />
      <PaymentPageControls
        disableNextButton={true}
      />
    </>
  )
}

export default PaymentPage

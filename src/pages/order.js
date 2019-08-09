import React, { useContext, useState } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import shoppingContext from "../contexts/ShoppingContext"
import PricingPanel from "../components/PricingPanel"
import PaymentMethodPanel from "../components/PaymentMethodPanel"
import OrderPageControls from "../components/ControlButtons/OrderPageControls"

import { media } from "../utils/styledUtils"

const OrderPage = () => {
  const { selectedItems, items, updateItem } = useContext(shoppingContext)
  if (selectedItems.length === 0) {
    navigate('/')
  }

  const itemsInfo = selectedItems.map(i => ({
    ...i,
    ...(items.find(item => item.id === i.id))
  }))

  const totalItemsCount = itemsInfo.reduce((sum, item) => sum + item.count, 0)

  const [isInputValid, setInputValid] = useState(false);

  return (
    <Container>
      <PanelGroup>
        <PricingPanel
          items={itemsInfo}
          updateItem={updateItem}
        />

        <FormWrapper>
          <PaymentMethodPanel
            setInputValid={setInputValid}
          />
        </FormWrapper>
      </PanelGroup>

      <OrderPageControls
        disableMobileNextButton={totalItemsCount <= 0}
        disableDesktopNextButton={totalItemsCount <= 0 || !isInputValid}
      />
    </Container>
  )
}


const Container = styled.div`
  ${media.desktop`
    width: 1098px;
    margin: 0 auto;
  `}
`

const PanelGroup = styled.div`
  ${media.desktop`
    display: flex;
    justify-content: space-between;
  `}
`

const FormWrapper = styled.div`
  display: none;

  ${media.desktop`
    display: block;
  `}
`

export default OrderPage

import React, { useContext } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import shoppingContext from "../contexts/ShoppingContext"
import OrderResultPanel from "../components/OrderResultPanel"
import OrderResultPageControls from "../components/ControlButtons/OrderResultPageControls"

import { media } from "../utils/styledUtils"

const OrderResultPage = () => {
  const { selectedItems, items, buyerInfo } = useContext(shoppingContext)
  if (selectedItems.length === 0) {
    navigate('/')
  }

  const itemsInfo = selectedItems.map(i => ({
    ...i,
    ...(items.find(item => item.id === i.id))
  }))

  return (
    <Container>
      <OrderResultPanel
        items={itemsInfo}
        buyerInfo={buyerInfo}
      />
      <OrderResultPageControls />
    </Container>
  )
}

const Container = styled.div`
  ${media.desktop`
    width: 1098px;
  `}
`

export default OrderResultPage

import React, { useContext } from "react"
import { navigate } from "gatsby"

import shoppingContext from "../contexts/ShoppingContext"
import PricingPanel from "../components/PricingPanel"
import OrderPageControls from "../components/ControlButtons/OrderPageControls"

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

  return (
    <>
      <PricingPanel
        items={itemsInfo}
        updateItem={updateItem}
      />
      <OrderPageControls
        disableNextButton={totalItemsCount <= 0}
      />
    </>
  )
}

export default OrderPage

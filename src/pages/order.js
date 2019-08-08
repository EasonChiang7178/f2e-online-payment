import React, { useContext } from "react"
import { navigate } from "gatsby"

import shoppingContext from "../contexts/ShoppingContext"
import PricingPanel from "../components/PricingPanel"

const OrderPage = () => {
  const { selectedItems, items, updateItem } = useContext(shoppingContext)
  if (selectedItems.length === 0) {
    navigate('/')
  }

  const itemsInfo = selectedItems.map(i => ({
    ...i,
    ...(items.find(item => item.id === i.id))
  }))

  return (
    <>
      <PricingPanel
        items={itemsInfo}
        updateItem={updateItem}
      />
    </>
  )
}

export default OrderPage

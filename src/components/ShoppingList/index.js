import React, { useContext } from "react"

import shoppingContext from "../../contexts/ShoppingContext"

import { Container } from "./index.css"
import ShoppingItem from "./ShoppingItem"

const ShoppingList = () => {
  const { selectedItems, items, addItem, updateItems } = useContext(shoppingContext)
  if (selectedItems.some(item => item.count <= 0)) {
    updateItems(selectedItems.filter(item => item.count > 0))
  }

  return (
    <Container>
      {items.map(item => (
        <ShoppingItem key={item.id}
          isSelected={selectedItems.findIndex(i => i && i.id === item.id) !== -1}
          name={item.name}
          unit={item.unit}
          price={item.price}
          imageData={item.imageData}
          onClick={() => addItem(item.id)}
        />
      ))}
    </Container>
  )
}

export default ShoppingList

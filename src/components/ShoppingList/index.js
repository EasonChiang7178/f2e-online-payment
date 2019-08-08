import React, { useContext } from "react"

import shoppingContext from "../../contexts/ShoppingContext"

import { Container } from "./index.css"
import ShoppingItem from "./ShoppingItem"

const ShoppingList = () => {
  const { selectedItems, items, addItem } = useContext(shoppingContext)

  return (
    <Container>
      {items.map(item => (
        <ShoppingItem key={item.id}
          isSelected={selectedItems.findIndex(i => i && i.id === item.id) !== -1}
          name={item.name}
          desc={item.description}
          price={item.price}
          imageData={item.imageData}
          onClick={() => addItem(item.id)}
        />
      ))}
    </Container>
  )
}

export default ShoppingList

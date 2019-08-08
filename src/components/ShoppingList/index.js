import React, { useContext } from "react"

import shoppingContext from "../../contexts/ShoppingContext"

import { Container } from "./index.css"
import ShoppingItem from "./ShoppingItem"

const ShoppingList = () => {
  const { selectedItemIds, items } = useContext(shoppingContext)

  return (
    <Container>
      {items.map(item => (
        <ShoppingItem key={item.id}
          isSelected={selectedItemIds.indexOf(item.id) !== -1}
          name={item.name}
          desc={item.description}
          price={item.price}
          imageData={item.imageData}
        />
      ))}
    </Container>
  )
}

export default ShoppingList

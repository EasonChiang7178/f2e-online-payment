import React, { useContext } from "react"

import shoppingContext from "../../contexts/ShoppingContext"

import { Container } from "./index.css"
import ShoppingItem from "./ShoppingItem"

const ShoppingList = () => {
  const items = useContext(shoppingContext).items

  return (
    <Container>
      {items.map(item => (
        <ShoppingItem key={item.id}
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

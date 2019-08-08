import React from "react"
import PropTypes from "prop-types"

import { ShoppingProvider } from "./ShoppingContext"

import { useItemData } from "../hooks/useItemData"
import { useItemImageData } from "../hooks/useItemImageData"

const AppProvider = ({ children }) => {
  const items = useItemData()
  const itemImageData = useItemImageData()

  return (
    <ShoppingProvider items={items} itemImageData={itemImageData}>
      {children}
    </ShoppingProvider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppProvider

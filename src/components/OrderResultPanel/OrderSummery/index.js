import React from "react"
import PropTypes from "prop-types"

import OrderItem from "./OrderItem"
import { TotalPrice, ShoppingFee, FinalPrice, Separator } from "./index.css"

const OrderSummery = ({ items }) => {
  const totalPrice = items.reduce((total, item) => item.count * Number(item.price) + total, 0)
  const shoppingFee = totalPrice >= 2000 ? 0 : 200
  const finalPrice = totalPrice + shoppingFee

  return (
    <div>
      {items.map(item => (
        <OrderItem key={item.id}
          name={item.name}
          count={item.count}
          unit={item.unit}
          price={item.price}
        />
      ))}
      <TotalPrice>小計<b>{totalPrice}元</b></TotalPrice>
      <ShoppingFee>運費<b>{shoppingFee}元</b></ShoppingFee>
      <Separator />
      <FinalPrice>總額<b>{finalPrice}元</b></FinalPrice>
    </div>
  )
}

OrderSummery.propTypes = {
  item: PropTypes.array
}

export default OrderSummery

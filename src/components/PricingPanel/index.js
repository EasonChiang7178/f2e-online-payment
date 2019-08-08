import React from "react"

import { Step, Wrapper, TotalPrice } from "./index.css"
import ItemCountSelector from "./ItemCountSelector"
import SummaryPrice from "./SummaryPrice"

const PricingPanel = ({ items, updateItem }) => {
  const totalPrice = items.reduce((total, item) => item.count * Number(item.price) + total, 0)
  const shoppingFee = totalPrice >= 2000 ? 0 : 200
  const finalPrice = totalPrice + shoppingFee

  return (
    <Wrapper>
      <Step>步驟2.購買數量與金額</Step>

      {items.map(item => (
        <ItemCountSelector key={item.id}
          name={item.name}
          count={item.count}
          imageData={item.imageData}
          price={item.price}
          onChange={updateItem}
        />
      ))}

      <SummaryPrice
        sum={totalPrice}
        shoppingFee={shoppingFee}
      />
      <TotalPrice>
        總額<b>{finalPrice}元</b>
      </TotalPrice>
    </Wrapper>
  )
}

export default PricingPanel

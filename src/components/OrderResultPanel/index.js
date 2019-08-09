import React from "react"
import PropTypes from "prop-types"
import generate from "nanoid/generate"

import { Panel, OrderId, Step, OrderContentWrapper } from "./index.css"
import OrderSummery from "./OrderSummery"
import OrderBuyer from "./OrderBuyer"

const OrderResultPanel = ({ items, buyerInfo }) => {
  const orderId = generate("123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 11)

  return (
    <Panel>
      <Step>成功訂購</Step>

      <OrderId>{`訂單編號：${orderId}`}</OrderId>

      <OrderContentWrapper>
        <OrderSummery
          items={items}
        />

        <OrderBuyer
          buyerInfo={buyerInfo}
        />
      </OrderContentWrapper>
    </Panel>
  )
}

OrderResultPanel.propTypes = {
  items: PropTypes.array,
  buyerInfo: PropTypes.object
}

export default OrderResultPanel

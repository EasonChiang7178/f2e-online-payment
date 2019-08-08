import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Summary, ShoppingFee, Info, Fee } from "./index.css"

const SummaryPrice = ({ sum, shoppingFee }) => {
  return (
    <Wrapper>
      <Summary>小計<b>{sum}元</b></Summary>
      <ShoppingFee>
        <Info>(滿2000元享免運優惠)</Info>
        <Fee>運費<b>{shoppingFee}元</b></Fee>
      </ShoppingFee>
    </Wrapper>
  )
}

SummaryPrice.propTypes = {
  sum: PropTypes.number.isRequired,
  shoppingFee: PropTypes.number.isRequired
}

export default SummaryPrice

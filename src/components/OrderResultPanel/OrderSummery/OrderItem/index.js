import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Name, InfoWrapper, Unit, Price } from "./index.css"

const OrderItem = ({ name, count, unit, price }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>

      <InfoWrapper>
        <Unit>{`${count}${unit}`}</Unit>
        <Price>{price}元</Price>
      </InfoWrapper>
    </Wrapper>
  )
}

OrderItem.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  unit: PropTypes.string,
  price: PropTypes.string
}

export default OrderItem

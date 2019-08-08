import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Image, InfoWrapper, Name, Desc, Price } from "./index.css"

const ShoppingItem = ({ className, name, desc, price, imageData }) => {
  return (
    <Wrapper className={className}>
      <Image fixed={imageData} />
      <InfoWrapper>
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
        <Price><b>{price}</b> 元</Price>
      </InfoWrapper>
    </Wrapper>
  )
}

ShoppingItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageData: PropTypes.object.isRequired
}

export default ShoppingItem

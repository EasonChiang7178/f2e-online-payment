import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

import { Wrapper, Image, InfoWrapper, Name, Desc, Price } from "./index.css"

const ShoppingItem = ({ className, isSelected, name, unit, price, imageData, onClick }) => {
  const handleOnClick = () => {
    navigate("/order")
    onClick()
  }

  return (
    <Wrapper className={className} isSelected={isSelected} onClick={handleOnClick}>
      <Image fixed={imageData} />
      <InfoWrapper>
        <Name>{name}</Name>
        <Desc>1{unit}</Desc>
        <Price><b>{price}</b> 元</Price>
      </InfoWrapper>
    </Wrapper>
  )
}

ShoppingItem.propTypes = {
  className: PropTypes.string,
  isSelected: PropTypes.bool,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageData: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

ShoppingItem.defaultProps = {
  isSelected: false
}

export default ShoppingItem

import React from "react"
import PropTypes from "prop-types"
import InputNumber from "rc-input-number"
import 'rc-input-number/assets/index.css'

import { Wrapper, Image, InfoWrapper, Name, PriceWrapper, CountInput, Price } from "./index.css"

const ItemCountSelector = ({ name, count, price, imageData, onChange }) => {
  return (
    <Wrapper>
      <Image fixed={imageData} />
      <InfoWrapper>
        <Name>{name}</Name>
        <PriceWrapper>
          <CountInput>
            <InputNumber
              min={0}
              max={99}
              value={count}
              onChange={onChange}
              useTouch
            /> 包
          </CountInput>
          <Price>{price}元</Price>
        </PriceWrapper>
      </InfoWrapper>
    </Wrapper>
  )
}

ItemCountSelector.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  imageData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ItemCountSelector

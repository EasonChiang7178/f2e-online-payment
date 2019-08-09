import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { COLOR } from "../../../constants"
import { media } from "../../../utils/styledUtils"

const Wrapper = styled.div`
  padding: 9px 28px 13px 18px;
  border: 1px solid ${COLOR.LIGHT_PINK};
  font-size: 23px;
  font-weight: 300;
  line-height: 31px;

  margin-top: 12px;

  ${media.desktop`
    width: 500px;
    flex: 0 0 auto;
    box-sizing: border-box;
    margin-top: 4px;
  `}
`

const OrderBuyer = ({ buyerInfo }) => {
  const { name, phone, address } = buyerInfo

  const maskedName = name.length > 2
    ? name.split("").map((c, i) => (i > 0 && i !== name.length - 1) ? "○" : c).join("")
    : name

  const maskedPhone = `${phone.slice(0, 4)}-${phone.slice(4, 7)}-XXX`

  return (
    <Wrapper>
      <div>收件人：{maskedName}</div>
      <div>電話：{maskedPhone}</div>
      <div>收件地址：{address}</div>
    </Wrapper>
  )
}

OrderBuyer.propTypes = {
  buyerInfo: PropTypes.object
}

export default OrderBuyer

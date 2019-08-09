import styled from "styled-components"
import Img from "gatsby-image"

import { COLOR } from "../../../constants"

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-right: 3px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  & + & {
    border-top: 2px solid ${COLOR.LIGHT_PINK};
    padding-top: 22px;
  }
`

export const Image = styled(Img)`
  width: 70px !important;
  height: 70px !important;
  flex: 0 0 auto;
`

export const InfoWrapper = styled.div`
  margin-left: 19px;
  width: 100%;
`

export const Name = styled.div`
  margin-bottom: 10px;
  font-size: 21px;
  line-height: 28px;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CountInput = styled.div`
  font-size: 23px;
  font-weight: 300;
  line-height: 31px;
  color: ${COLOR.LIGHT_BLACK};
  display: flex;
  align-items: center;

  .rc-input-number {
    width: 72px;
    height: 40px;
    font-size: 23px;
    line-height: 31px;
    border-radius: 6px;
    margin-right: 6px;

    .rc-input-number-handler-wrap {
      display: none;
    }

    .rc-input-number-input {
      color: black;
      font-weight: 300;
    }
  }
`

export const Price = styled.div`
  font-size: 23px;
  font-weight: 300;
  line-height: 31px;
  color: ${COLOR.LIGHT_BLACK};
`


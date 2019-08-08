import styled from "styled-components"
import { COLOR } from "../../../constants"

export const Wrapper = styled.div`
  border-top: 2px solid ${COLOR.LIGHT_PINK};
  padding-top: 21px;
  padding-bottom: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 23px;
  line-height: 31px;
  font-weight: 300;
`

export const Summary = styled.div`
  color: ${COLOR.LIGHT_BLACK};

  b {
    margin-left: 18px;
    font-weight: 300;
  }
`

export const ShoppingFee = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const Info = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: ${COLOR.BROWN};
`

export const Fee = styled.div`
  color: ${COLOR.GREEN};

  b {
    margin-left: 18px;
    font-weight: 300;
  }
`

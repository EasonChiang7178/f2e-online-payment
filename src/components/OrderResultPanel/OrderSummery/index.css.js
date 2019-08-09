import styled from "styled-components"
import { COLOR } from "../../../constants";

export const TotalPrice = styled.div`
  font-size: 21px;
  font-weight: 300;
  line-height: 31px;
  width: 124px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: ${COLOR.LIGHT_BLACK};

  b {
    font-weight: 300;
  }
`

export const ShoppingFee = styled.div`
  font-size: 21px;
  font-weight: 300;
  line-height: 31px;
  width: 124px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: ${COLOR.GREEN};

  b {
    font-weight: 300;
  }
`

export const Separator = styled.div`
  height: 2px;
  background: ${COLOR.LIGHT_PINK};
  margin-bottom: 16px;
`

export const FinalPrice = styled.div`
  font-size: 21px;
  font-weight: 300;
  line-height: 31px;
  width: 124px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  color: ${COLOR.RED};

  b {
    font-weight: 300;
  }
`

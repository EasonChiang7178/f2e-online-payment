import styled from "styled-components"

import StepRaw from "../Step"
import { COLOR } from "../../constants"

export const Wrapper = styled.div`
  width: 345px;
  padding: 16px 15px 28px;
  border-radius: 14px;
  background: white;
  box-sizing: border-box;
  box-shadow: 0 3px 6px 0 rgba(187, 68, 68, .4);
`

export const Step = styled(StepRaw)`
  width: 315px;
  margin-bottom: 24px;
`

export const TotalPrice = styled.div`
  padding-top: 12px;
  padding-right: 6px;
  border-top: 2px solid ${COLOR.LIGHT_PINK};
  font-size: 30px;
  font-weight: 300;
  text-align: right;
  line-height: 40px;
  color: ${COLOR.RED};
  
  b {
    margin-left: 21px;
    font-weight: bold;
  }
`

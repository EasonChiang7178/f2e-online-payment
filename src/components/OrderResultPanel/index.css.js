import styled from "styled-components"

import StepRaw from "../Step"
import { media } from "../../utils/styledUtils"

export const Panel = styled.div`
  width: 100%;
  padding: 16px 15px 17px;
  border-radius: 14px;
  background: white;
  box-sizing: border-box;
  box-shadow: 0 3px 6px 0 rgba(187, 68, 68, 0.4);

  ${media.desktop`
    padding: 16px 125px 46px;
    min-height: 404px;
  `}
`

export const OrderId = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: 500;
  line-height: 31px;

  ${media.desktop`
    margin-bottom: 21px;
    text-align: center;
  `}
`

export const Step = styled(StepRaw)`
  width: 315px;
  margin-bottom: 12px;

  ${media.desktop`
    margin-bottom: 27px;
  `}
`

export const OrderContentWrapper = styled.div`
  ${media.desktop`
    display: flex;
    justify-content: space-between;
  `}
`

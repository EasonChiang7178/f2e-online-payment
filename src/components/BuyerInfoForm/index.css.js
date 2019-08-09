import styled from "styled-components"

import { COLOR } from "../../constants"
import { media } from "../../utils/styledUtils"

export const Container = styled.div`
  ${media.desktop`
    display: flex;
  `}
`

export const CreditCardWrapper = styled.div``

export const BuyerInfoWrapper = styled.div`
  padding-top: 22px;
  margin-bottom: -20px;
  border-top: 2px solid ${COLOR.LIGHT_PINK};

  ${media.desktop`
    padding-top: 0;
    border: none;
    margin-left: 34px;
  `}
`

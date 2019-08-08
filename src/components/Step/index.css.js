import styled from "styled-components"
import { COLOR } from "../../constants"

export const Wrapper = styled.div`
  margin: 0 auto 16px;
  padding: 2px 79px;
  width: 341px;
  background: ${COLOR.GREY};
  border-radius: 32px;
  box-sizing: border-box;
`

export const Info = styled.span`
  font-size: 21px;
  line-height: 28px;
  font-weight: 300;
  text-align: center;
  color: ${COLOR.BROWN};
  display: block;
`

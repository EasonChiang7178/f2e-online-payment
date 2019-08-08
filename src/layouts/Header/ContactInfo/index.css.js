import styled from "styled-components"
import { COLOR } from "../../../constants"

export const Wrapper = styled.div`
  position: absolute;
  top: 13px;
  left: 0;
  padding: 5px 19px 7px 32px;
  background: ${COLOR.PINK};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const Info = styled.span`
  font-size: 21px;
  font-weight: 300;
  line-height: 28px;
  color: white;
  display: inline-block;
`

import styled from "styled-components"
import { COLOR } from "../../../constants"

export const Container = styled.div`
  display: flex;
`

export const Selector = styled.div`
  width: 95px;
  height: 57px;
  border: 1px solid ${COLOR.PINK};
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  line-height: 31px;
  color: ${COLOR.BROWN};
  cursor: not-allowed;

  ${props => props.active && {
    boxShadow: `0 0 0 1px ${COLOR.PINK}`,
    background: COLOR.REGULAR_PINK,
    cursor: "default"
  }}

  & + & {
    margin-left: 14px;
  }

  svg {
    width: 39px !important;
    height: 36px;
  }
`

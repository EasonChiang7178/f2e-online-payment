import styled from "styled-components"
import { COLOR } from "../../constants"

export const Label = styled.label`
  font-size: 23px;
  font-weight: 500;
  line-height: 31px;
`

export const Input = styled.input`
  padding: 3px 9px 6px;
  border-radius: 6px;
  border: 1px solid ${COLOR.LIGHT_BLUE};
  box-shadow: 0 0 6px 0 ${COLOR.BLUE};
  height: 40px;
  font-size: 23px;
  font-weight: 300;
  line-height: 31px;
  color: ${COLOR.LIGHT_BLACK};
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  ${props => props.isInvalid && {
    background: "#FFF9DC",
    borderColor: "#D8586D",
    boxShadow: `0 0 6px 0 #FFD9DC`
  }}
`

export const Select = styled.select`
  padding: 5px 0 4px 8px;
  width: 94px;
  height: 40px;
  border: 1px solid ${COLOR.LIGHT_BLUE};
  box-shadow: 0 0 6px 0 ${COLOR.BLUE};
  border-radius: 6px;
  background: white;
  font-size: 23px;
  font-weight: 300;
  line-height: 31px;
  color: ${COLOR.LIGHT_BLACK};
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  ${props => props.isInvalid && {
    background: "#FFF9DC",
    borderColor: "#D8586D",
    boxShadow: `0 0 6px 0 #FFD9DC`
  }}
`

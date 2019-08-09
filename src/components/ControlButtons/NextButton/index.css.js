import styled from "styled-components"
import { COLOR } from "../../../constants"

export const Button = styled.button`
  width: 154px;
  height: 48px;
  padding: 10px 0px;
  background: ${COLOR.PINK};
  border-radius: 14px;
  border: 2px solid ${COLOR.PINK};
  font-size: 21px;
  font-weight: 300;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;

    ${props => props.disabled && {
      textDecoration: "none"
    }}
  }

  &:focus {
    outline: none;
  }

  ${props => props.disabled && {
    opacity: .35,
    cursor: "not-allowed"
  }}
`

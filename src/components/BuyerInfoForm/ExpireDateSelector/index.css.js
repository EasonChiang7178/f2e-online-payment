import styled from "styled-components"
import { Label as LabelRaw, Select as SelectRaw } from "../Common.css"

export const Wrapper = styled.div`
  margin-bottom: 19px;
`

export const Label = styled(LabelRaw)`
  margin-right: 14px;
`

export const Select = SelectRaw

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  & + & {
    margin-left: 23px;
  }

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    display: block;
    border: 8px solid black;
    border-left: 6px solid transparent;
    border-bottom: none;
    border-right: 6px solid transparent;
  }
`

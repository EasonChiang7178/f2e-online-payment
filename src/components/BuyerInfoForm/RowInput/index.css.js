import styled from "styled-components"
import { Label as LabelRaw, Input as InputRaw } from "../Common.css"

export const Wrapper = styled.div`
  margin-bottom: 20px;
`

export const Label = styled(LabelRaw)`
  width: 92px;
  display: inline-block;
  text-align: right;
  margin-right: 14px;
`

export const Input = styled(InputRaw)`
  width: 211px;
`

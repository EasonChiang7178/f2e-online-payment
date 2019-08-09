import styled from "styled-components"
import { Label as LabelRaw, Input as InputRaw } from "../Common.css"

export const Container = styled.div`
  margin-bottom: 21px;
`

export const InputWrapper = styled.div``

export const Label = styled(LabelRaw)`
  margin-bottom: 10px;
  display: inline-block;
`

export const Input = styled(InputRaw)`
  padding: 3px 6px 6px;
  width: 68px;
  display: inline-block;
  box-sizing: border-box;

  & + & {
    margin-left: 15px;
  }
`

import styled from "styled-components"

import StepRaw from "../Step"
import { media } from "../../utils/styledUtils"

export const Wrapper = styled.div`
  width: 345px;
  padding: 16px 13px 24px;
  border-radius: 14px;
  background: white;
  box-sizing: border-box;
  box-shadow: 0 3px 6px 0 rgba(187, 68, 68, 0.4);

  ${media.desktop`
    padding: 16px 27px 0 30px;
    width: 725px;
    height: 100%;
  `}
`

export const Step = styled(StepRaw)`
  width: 315px;
`

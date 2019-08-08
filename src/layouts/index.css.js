import styled from "styled-components"
import posed from "react-pose"

import { media } from "../utils/styledUtils"

const PosedSection = posed.section({
  enter: {
    opacity: 1,
    transition: {
      opacity: { duration: 300 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 300 }
    }
  }
})

export const PagePosedWrapper = styled(PosedSection)`
  padding: 19px 15px 64px;
  box-sizing: border-box;

  ${media.desktop`
    padding: 34px 15px 64px;
  `}
`

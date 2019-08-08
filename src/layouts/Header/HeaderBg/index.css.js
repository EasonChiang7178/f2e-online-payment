import styled from "styled-components"
import Img from "gatsby-image"

import { media } from "../../../utils/styledUtils"

export const Image = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: -moz-linear-gradient(top, rgba(255,255,255,0.15) 0%, rgba(255,255,255,.35) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,0.15) 0%,rgba(255,255,255,.35) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%,rgba(255,255,255,.35) 100%);

    ${media.desktop`
      background: transparent;
    `}
  }

  img {
    filter: blur(6px);
  }
`

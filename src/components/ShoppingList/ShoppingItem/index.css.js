import styled from "styled-components"
import Img from "gatsby-image"

import { media } from "../../../utils/styledUtils"
import { COLOR } from "../../../constants"

export const Wrapper = styled.div`
  border-radius: 14px;
  background: white;
  padding: 10px 17px 10px 9px;
  box-shadow: 0 3px 6px 0 rgba(187, 68, 68, .4);
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 2px ${COLOR.PINK};
  }

  ${media.desktop`
    width: 295px;
    margin-left: 18px;

    &:nth-child(3n+1) {
      margin-left: 0;
    }
  `}
`

export const Image = styled(Img)`
  flex: 0 0 auto;
  max-height: 140px;
`

export const InfoWrapper = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
`

export const Name = styled.div`
  font-size: 29px;
  line-height: 38px;
  margin-bottom: 1px;

  ${media.desktop`
    font-size: 25px;
    line-height: 33px;
  `}
`

export const Desc = styled.div`
  font-size: 23px;
  line-height: 31px;
  color: ${COLOR.LIGHT_BLACK};
  font-weight: 300;
`

export const Price = styled.div`
  margin-top: auto;
  align-self: flex-end;
  font-size: 20px;
  line-height: 27px;
  color: ${COLOR.LIGHT_BLACK};
  font-weight: 300;

  b {
    font-size: 45px;
    line-height: 60px;
    color: ${COLOR.HIGHLIGHT_PINK};
    font-weight: 300;
  }
`

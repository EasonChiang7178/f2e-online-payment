import styled from "styled-components"
import { media } from "../../utils/styledUtils"

export const Container = styled.div`
  ${media.desktop`
    display: flex;
    flex-wrap: wrap; 
    max-width: 999px;
    margin: 0 auto;
  `}
`

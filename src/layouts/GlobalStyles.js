import React from "react"
import { Normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"

import { COLOR } from "../constants"

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');
  body {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, "Helvetica", 'Helvetica Neue', 'Open Sans', sans-serif;
    background-color: ${COLOR.LIGHT_PINK};
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
`

class GlobalStyles extends React.PureComponent {
  render = () => (
    <>
      <Normalize />
      <Global />
    </>
  )
}

export default GlobalStyles

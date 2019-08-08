import React from "react"

import { Wrapper } from "./index.css"
import HeaderBg from "./HeaderBg"
import ContactInfo from "./ContactInfo"
import Logo from "./Logo"

const Header = () => {

  return (
    <Wrapper>
      <HeaderBg />

      <Logo />
      <ContactInfo phoneNumber="0919570022" />
    </Wrapper>
  )
}

export default Header

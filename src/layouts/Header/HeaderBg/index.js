import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Image } from "./index.css"
import { MEDIA } from "../../../constants"

export const HeaderBg = ({ bgData }) => {
  const sources = [
    bgData.mobileImage.childImageSharp.fluid,
    {
      ...bgData.desktopImage.childImageSharp.fluid,
      media: `(min-width: ${MEDIA.DESKTOP}px)`
    }
  ]

  return (
    <Image fluid={sources} />
  )
}

HeaderBg.propTypes = {
  bgData: PropTypes.object.isRequired
}


const HeaderBgContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "head-bg.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(
        relativePath: { eq: "head-bg-desktop.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <HeaderBg bgData={data} />
  )
}


export default HeaderBgContainer

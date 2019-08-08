import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Image } from "./index.css"
import { MEDIA } from "../../../constants"

const Logo = ({ logoData }) => {
  const sources = [
    logoData.mobileImage.childImageSharp.fluid,
    {
      ...logoData.desktopImage.childImageSharp.fluid,
      media: `(min-width: ${MEDIA.DESKTOP}px)`
    }
  ]

  return (
    <Link to="/">
      <Image fluid={sources} />
    </Link>
  )
}

Logo.propTypes = {
  logoData: PropTypes.object.isRequired
}


const LogoContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "head.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "head-desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1366, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Logo logoData={data} />
}


export default LogoContainer

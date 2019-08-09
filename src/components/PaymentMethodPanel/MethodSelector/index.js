import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard } from "@fortawesome/free-regular-svg-icons"

import { Container, Selector } from "./index.css"

const MethodSelector = () => {
  const linePayImageData = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "linepay-logo.png"}) {
        childImageSharp {
          fixed(width: 77, height: 25) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Selector active={true}>
        <FontAwesomeIcon icon={faCreditCard} />
      </Selector>
      <Selector>
        <Image fixed={linePayImageData.file.childImageSharp.fixed} />
      </Selector>
      <Selector>
        轉帳
      </Selector>
    </Container>
  )
}

export default MethodSelector

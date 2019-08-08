import { useStaticQuery, graphql } from "gatsby"

export const useItemImageData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "items"}}) {
          edges {
            node {
              childImageSharp {
                fixed(width: 140) {
                  ...GatsbyImageSharpFixed_withWebp
                  originalName
                }
              }
            }
          }
        }
      }
    `
  )

  return data.allFile.edges.reduce((result, edge) => {
    const originalName = edge.node.childImageSharp.fixed.originalName
    const id = originalName.slice(0, originalName.indexOf('.'))

    result[id] = edge.node.childImageSharp.fixed
    return result
  }, {})
}

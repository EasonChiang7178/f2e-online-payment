import { useStaticQuery, graphql } from "gatsby"

export const useItemData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allItemsJson {
          nodes {
            name
            price
            id
            unit
          }
        }
      }
    `
  )

  return data.allItemsJson.nodes
}

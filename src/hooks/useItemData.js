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
            description
          }
        }
      }
    `
  )

  return data.allItemsJson.nodes
}

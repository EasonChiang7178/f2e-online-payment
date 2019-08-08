import React from "react"
import { Link } from "gatsby"
import Step from "../components/Step"

const IndexPage = () => (
  <>
    <Step>步驟1.選擇購買商品</Step>

    <Link to="/order">Go</Link>
  </>
)

export default IndexPage

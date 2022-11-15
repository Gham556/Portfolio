import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const InventoryIndex = () => (
  <Layout>
    <h1>
      Hello from <b>Inventory Index</b>
    </h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />

export default InventoryIndex
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css";
import DemoCarousel from "../components/react-carousel";


const links = [
  {
    text: "Github",
    url: "https://github.com/Gham556",
    description:
      "Check Out Every Project On My Development Journey!",
  },
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/in/george-fotheringham-642976171/",
    description: "Look how professional I can be online!"
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
    <StaticImage
        src="../images/George-Fotheringham-logos_black_1200-1200.png"
        loading="eager"
        height={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
        <h1>Featured Projects</h1>
        <DemoCarousel />
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>      
  </Layout>
)


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

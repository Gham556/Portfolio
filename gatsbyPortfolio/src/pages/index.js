import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import cycleRight from "../components/caroselController.js";

const links = [
  {
    text: "Github",
    url: "https://github.com/Gham556",
    description:
      "Check Out Every Project On My Development Journey!",
  },
  {
    text: "Resume",
    url: "",
    description: "Peruse My Work History And Accomplishments"
  },
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/in/george-fotheringham-642976171/",
    description: "Look how professional I can be online!"
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
    <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>My Portfolio</b>
      </h1>
      <div className={styles.body1}> 
        <h1>Featured Projects</h1>
        <div className={styles.carouselWindow}>
            <div className={styles.allImages}>
                <a href="https://github.com/Gham556/Memory-Card"><StaticImage src="../images/fredy-jacob-t0SlmanfFcg-unsplash.jpg" alt="memory-card"/></a>
                <a href="https://github.com/Gham556/Knights-Travais"> <StaticImage src="../images/hassan-pasha-7SjEuEF06Zw-unsplash.jpg" alt="chess-knights"/></a>
                <a href="https://github.com/Gham556/Inventory-Application"> <StaticImage src="../images/scott-graham-5fNmWej4tAA-unsplash.jpg" alt="computers"/> </a>
            </div>
        </div>
        <div class='buttons'> 
            <button id="next">Next</button>
            <button id="last">Last</button>
        </div>   
      </div>  
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
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
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

setInterval(cycleRight, 8000)
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

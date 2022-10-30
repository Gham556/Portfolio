module.exports = {
  siteMetadata: {
    title: `George Fotheringham`,
    description: `George Fotheringham is a self-taught software developer.`,
    author: `@gham556s`,
    siteUrl: `https://georgefotheringham.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `George Fotheringham`,
        short_name: `GF`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/George-Fotheringham-logos_black_1200-1200.png"
      },
    },
  ],
}

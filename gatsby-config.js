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
    {
      resolve: `gatsby-source-mongodb`,
      options: { dbName: `local`, collection: `documents`, connectionString: 'mongodb+srv://Gham556:Fotheringham556@cluster0.mbba2nz.mongodb.net/test',auth: {user: 'Gham556', password: 'Fotheringham556'} },
      query: { documents: { as_of: { $gte: 1604397088013 } } },
    },
  ],
}

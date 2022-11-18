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
      // The name of the plugin
      resolve: 'gatsby-source-mongodb',
      options: {
          // Name of the database and collection where are books reside
          dbName: 'bgg',
          collection: 'bgg',
          connectionString: 'mongodb://gham556:Fotheringham556@global.aws.realm.mongodb.com:27020,ac-oix0sfv-shard-00-01.qmwi6on.mongodb.net:27017,ac-oix0sfv-shard-00-00.qmwi6on.mongodb.net:27017/?keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000replicaSet=bgg'          ,
      },
  },
  ],
}

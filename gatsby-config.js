module.exports = {
  siteMetadata: {
    title: `Tausif`,
    description: `Portofolio`,
    author: `Tausif`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Montserrat`,
    //         variants: [`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`]
    //       },
    //       {
    //         family: `IBM Plex Sans`,
    //         variants: [`300`,`400`,`500`,`600`,`700`]
    //       },
    //       {
    //         family: 'DM Serif Display',
    //         variants: [`400`]
    //       }
    //     ],
    //   },
    // },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

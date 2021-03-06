module.exports = {
  siteMetadata: {
    title: `Jack Harding`,
	description: `Web Developer based in Bridgend, South Wales.`,
	author: '@JackAHarding'
  },
  plugins: [
	{
		resolve: `gatsby-plugin-google-analytics`,
		options: {
			// The property ID; the tracking code won't be generated without it
			trackingId: "UA-63855928-4",
			// Defines where to place the tracking script - `true` in the head and `false` in the body
			head: false
		}
	}
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
	  },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

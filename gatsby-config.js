module.exports = {
  siteMetadata: {
    title: `OnkarJanwa.com`,
    author: `Onkar Janwa`,
    description: `Person website.`,
    siteUrl: `https://onkarjanwa.com/`,
    social: {
      twitter: `https://twitter.com/onkarjanwa`,
      github: `https://github.com/onkarjanwa`,
      medium: `https://medium.com/@onkarjanwa`,
      linkedin: `https://www.linkedin.com/in/onkarjanwa`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156992143-1",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Onkar Janwa`,
        short_name: `OJ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-5.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-slug`,
  ],
}

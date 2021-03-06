module.exports = {
  pathPrefix: '/Reactborn',
  siteMetadata: {
    title: 'Waterborn Bali',
    instagram: 'https://www.instagram.com/waterbornbali/',
    twitter: '',
    facebook: 'https://www.facebook.com/waterbornbali/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        // rule: {
        //   include: `${__dirname}/src/images/social-icons/`, // See below to configure properly
        // },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `waterbornbali`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-recaptcha`,
    //   options: {
    //     async: true,
    //     defer: true,
    //     args: `?onload=onloadCallback&render=explicit`,
    //   },
    // },
  ],
};

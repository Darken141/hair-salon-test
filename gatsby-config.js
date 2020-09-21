module.exports = {
  siteMetadata: {
    title: `Kadernictvo`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@richard.humel`,

    menuLinks: [
      {
        id: 1,
        name: "Domov",
        slug: "#hero"
      },
      {
        id: 2,
        name: "Služby",
        slug: "#services"
      },
      {
        id: 3,
        name: "Recenzie",
        slug: "#testimonials"
      }
    ]
  },
  plugins: [
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/bg`, // wherever background images are stored
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
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

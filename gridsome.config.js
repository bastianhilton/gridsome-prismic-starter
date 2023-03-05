// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome-Prismic-Starter',
  plugins: [
    {
      use: "gridsome-source-graphql-prismic",
      options: {
        url: `https://${process.env.PRISMIC_REPOSITORY}.prismic.io`,
        fieldName: 'prismic',
        useMasterRef: true
      }
    }
  ]
}

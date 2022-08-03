module.exports = {
  siteMetadata: {
    title: `Gatsby Blog Tutorial`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
  ],
}

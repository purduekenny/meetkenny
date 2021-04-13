module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Meet Kenny Wilson: Communication Professional • PMP • IT Manager • UXC', // Navigation and Site Title
  titleAlt: 'Meet Kenny Wilson: Communication Professional • PMP • IT Manager • UXC', // Title for JSONLD
  description: 'Learn about the professional experience of Kenny Wilson',
  headline: 'Portflio site for Kenny Wilson', // Headline for schema.org JSONLD
  url: 'https://meetkenny.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/icon.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'LekoArts', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@purduekenny', // Twitter Username
  facebook: 'purduekenny', // Facebook Site Name
  googleAnalyticsID: 'G-RGKCV4CY7N',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}

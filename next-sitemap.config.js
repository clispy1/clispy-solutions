/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://clispysolutions.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://clispysolutions.com/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api'],
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
} 
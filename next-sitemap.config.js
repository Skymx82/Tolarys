/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.tolarys-toulouse.fr',
  generateRobotsTxt: false, // On a déjà créé notre robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/404'],
}

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rcrsjaiswal.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/*'],
      },
    ],
    additionalSitemaps: [
      'https://rcrsjaiswal.in/sitemap.xml',
    ],
  },

  // Transform function to add specific priorities and change frequencies
  transform: async (config, path) => {
    // Default values
    let priority = 0.7;
    let changefreq = 'weekly';

    // Home page
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // About, Contact pages
    else if (path === '/about' || path === '/contact') {
      priority = 0.9;
      changefreq = 'monthly';
    }
    // Products listing
    else if (path === '/products') {
      priority = 0.9;
      changefreq = 'daily';
    }
    // Individual product pages
    else if (path.startsWith('/products/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // Legal pages
    else if (
      path === '/privacy-policy' ||
      path === '/terms-conditions' ||
      path === '/shipping-return-policy'
    ) {
      priority = 0.5;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  // Additional paths for dynamic product pages
  additionalPaths: async () => {
    const productPaths = [
      '/products/galvanized-sheets',
      '/products/coloured-roofing-sheets',
      '/products/fiber-tmt-bars',
      '/products/tmt-bar',
      '/products/t-iron',
      '/products/c-channels',
      '/products/ms-angle',
      '/products/ms-structure',
      '/products/iron-plates',
      '/products/ms-pipes-tubes',
      '/products/cemented-roofing-sheets',
      '/products/ms-flat',
      '/products/barbed-wire',
      '/products/bladed-wire',
      '/products/boundary-fence',
      '/products/hr-sheet',
      '/products/gp-sheets',
    ];

    return productPaths.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};


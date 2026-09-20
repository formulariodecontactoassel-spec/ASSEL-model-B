import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/casos-de-exito'],
    },
    sitemap: 'https://assel.cl/sitemap.xml',
  };
}

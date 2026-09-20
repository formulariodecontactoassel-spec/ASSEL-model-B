import type { MetadataRoute } from 'next';

const publicRoutes = ['', '/nosotros', '/servicios', '/ventas-de-epp', '/contacto'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicRoutes.map((route) => ({
    url: `https://assel.cl${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

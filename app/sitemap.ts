import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sitesdejogos.org';

  const routes = [
    '',
    '/nossa-expertise',
    '/ajuda-e-suporte',
    '/jogo-responsavel',
    '/politica-de-privacidade',
    '/termos-e-condicoes',
    '/politica-de-cookies',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}

import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://taxgrid.example.com';

    const routes = [
        '',
        '/guides',
        '/guides/optimal-director-salary-2025-26',
        '/guides/pension-contributions-via-ltd-company',
        '/compare/salary-vs-dividends-100k',
        '/tax-years/2025-26',
        '/tax-years/2026-27',
        '/privacy',
        '/cookies',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}

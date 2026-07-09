import type { APIRoute } from 'astro';
import linksData from '../data/links.json';
import type { LinksData } from '../types/links';

export const prerender = true;

export const GET: APIRoute = () => {
	const { siteUrl } = linksData as LinksData;
	const origin = siteUrl.replace(/\/$/, '');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${origin}/</loc>
		<changefreq>monthly</changefreq>
		<priority>1</priority>
	</url>
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};

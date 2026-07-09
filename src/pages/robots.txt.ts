import type { APIRoute } from 'astro';
import linksData from '../data/links.json';
import type { LinksData } from '../types/links';

export const prerender = true;

export const GET: APIRoute = () => {
	const { siteUrl } = linksData as LinksData;
	const origin = siteUrl.replace(/\/$/, '');
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};

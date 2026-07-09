import type { LinkEntry, LinksData } from '../types/links';

function assertValidUrl(value: string, field: string): void {
	try {
		const parsed = new URL(value);
		if (!['http:', 'https:'].includes(parsed.protocol)) {
			throw new Error(`${field} must use http or https`);
		}
	} catch {
		throw new Error(`${field} is not a valid URL: ${value}`);
	}
}

function validateLink(link: LinkEntry, index: number): void {
	const prefix = `links[${index}]`;
	if (!link.label?.trim()) throw new Error(`${prefix}.label is required`);
	if (!link.slug?.trim()) throw new Error(`${prefix}.slug is required`);
	if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(link.slug)) {
		throw new Error(`${prefix}.slug must be lowercase alphanumeric with optional hyphens`);
	}
	if (!link.url?.trim()) throw new Error(`${prefix}.url is required`);
	assertValidUrl(link.url, `${prefix}.url`);
}

/** Fail fast at build time when links.json is malformed. */
export function validateLinks(data: LinksData): void {
	if (!data.title?.trim()) throw new Error('title is required');
	if (!data.tagline?.trim()) throw new Error('tagline is required');
	if (!data.description?.trim()) throw new Error('description is required');
	if (!data.author?.trim()) throw new Error('author is required');
	if (!data.siteUrl?.trim()) throw new Error('siteUrl is required');
	assertValidUrl(data.siteUrl, 'siteUrl');

	if (!Array.isArray(data.links) || data.links.length === 0) {
		throw new Error('links must be a non-empty array');
	}

	const slugs = new Set<string>();
	for (let i = 0; i < data.links.length; i++) {
		const link = data.links[i];
		validateLink(link, i);
		if (slugs.has(link.slug)) {
			throw new Error(`duplicate slug: ${link.slug}`);
		}
		slugs.add(link.slug);
	}
}

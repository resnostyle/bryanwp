/** Shape of `src/data/links.json` — single source of truth for the hub. */
export interface LinkEntry {
	label: string;
	url: string;
	/** Stable id for `/go/<slug>` (future Workers / redirects). */
	slug: string;
	/**
	 * Optional key for logo + color accent: `github`, `linkedin`, `blog` (also `rss`, `medium`, `writing`).
	 * Omitted or unknown → generic link icon + default accent.
	 */
	icon?: string;
}

export interface LinksData {
	/** Display name on the page and in social meta titles */
	title: string;
	/** Short personal line shown on the hub (not used for SEO meta description) */
	tagline: string;
	/** SEO / Open Graph description */
	description: string;
	/** Display name for meta author */
	author: string;
	/** Site origin for canonical + Open Graph URLs, e.g. https://bryanwp.com */
	siteUrl: string;
	links: LinkEntry[];
}

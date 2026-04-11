/** Shape of `src/data/links.json` — single source of truth for the hub. */
export interface LinkEntry {
	label: string;
	url: string;
	/** Stable id for `/go/<slug>` (future Workers / redirects). */
	slug: string;
	/**
	 * Optional key for logo + color accent: `github`, `linkedin`, `blog` (also `rss`, `medium`, `writing`).
	 * Omitted or unknown → generic link icon + sky accent.
	 */
	icon?: string;
}

export interface LinksData {
	title: string;
	description: string;
	/** Site origin for canonical + Open Graph URLs, e.g. https://bryanwp.com */
	siteUrl: string;
	links: LinkEntry[];
}

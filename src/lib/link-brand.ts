/**
 * Icon accent color per platform — kept minimal for editorial link rows.
 */
export function getLinkAccent(icon?: string): string {
	switch (icon?.toLowerCase() ?? '') {
		case 'github':
			return 'text-stone-300 group-hover:text-white';
		case 'linkedin':
			return 'text-[#5eb3ff] group-hover:text-[#8ecfff]';
		case 'blog':
		case 'rss':
		case 'medium':
		case 'writing':
			return 'text-amber-400 group-hover:text-amber-300';
		default:
			return 'text-amber-400/90 group-hover:text-amber-300';
	}
}

/**
 * Flat tiles: left stripe on row + icon cell tint.
 */
export interface BrandStyle {
	stripe: string;
	/** Icon container (flat fill + icon color) */
	well: string;
}

export function getBrandStyle(icon?: string): BrandStyle {
	switch (icon?.toLowerCase() ?? '') {
		case 'github':
			return {
				stripe: 'border-l-neutral-500 group-hover:border-l-neutral-300',
				well: 'bg-slate-800 text-white',
			};
		case 'linkedin':
			return {
				stripe: 'border-l-[#0A66C2] group-hover:border-l-[#3b9eff]',
				well: 'bg-slate-800 text-[#7dd3fc]',
			};
		case 'blog':
		case 'rss':
		case 'medium':
		case 'writing':
			return {
				stripe: 'border-l-amber-500 group-hover:border-l-amber-400',
				well: 'bg-slate-800 text-amber-200',
			};
		default:
			return {
				stripe: 'border-l-sky-500 group-hover:border-l-sky-400',
				well: 'bg-slate-800 text-sky-300',
			};
	}
}

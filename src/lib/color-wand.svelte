<script lang="ts">
	export let size = '24';
	export let variation: 'regular' | 'outline' | 'sharp' = 'regular';
	let svgpath: string;
	let svgregular = 'replace_svg_regular';
	let svgoutline =
		'<rect fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" x="280.48" y="122.9" width="63.03" height="378.2" rx="31.52" transform="translate(-129.23 312) rotate(-45)"/><path d="M178.38,178.38h0a31.64,31.64,0,0,0,0,44.75L223.25,268,268,223.25l-44.87-44.87A31.64,31.64,0,0,0,178.38,178.38Z"/><line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="48" y1="192" x2="96" y2="192"/><line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="90.18" y1="90.18" x2="124.12" y2="124.12"/><line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="192" y1="48" x2="192" y2="96"/><line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="293.82" y1="90.18" x2="259.88" y2="124.12"/><line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="124.12" y1="259.88" x2="90.18" y2="293.82"/>';
	let svgsharp =
		'<rect x="158.6" y="150.86" width="95.03" height="110.51" transform="translate(-85.38 206.12) rotate(-45)"/><polygon points="301.41 234.21 234.22 301.41 412 480 480 412 301.41 234.21"/><rect x="32" y="176" width="80" height="32"/><rect x="91.22" y="67.22" width="32" height="80" transform="translate(-44.41 107.22) rotate(-45)"/><rect x="176" y="32" width="32" height="80"/><rect x="236.92" y="91.22" width="80" height="32" transform="translate(5.29 227.22) rotate(-45)"/><rect x="67.22" y="260.92" width="80" height="32" transform="translate(-164.41 156.92) rotate(-45)"/>';
	switch (variation) {
		case 'outline':
			svgpath = svgoutline;
			break;
		case 'sharp':
			svgpath = svgsharp;
			break;
		default:
			svgpath = svgregular;
	}
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 512 512"
>
	{@html svgpath}
</svg>

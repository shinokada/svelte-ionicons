<script lang="ts">
	export let size = '24';
	export let variation: 'regular' | 'outline' | 'sharp' = 'regular';
	let svgpath: string;
	let svgregular =
		'<rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><rect x="85.69" y="198.93" width="292.63" height="114.14" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><line x1="480" y1="218.67" x2="480" y2="293.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/>';
	let svgoutline =
		'<rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><rect x="85.69" y="198.93" width="292.63" height="114.14" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><line x1="480" y1="218.67" x2="480" y2="293.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/>';
	let svgsharp =
		'<path d="M17,384H449V128H17ZM49,160H417V352H49Z"/><rect x="70.69" y="182.94" width="324.63" height="146.13"/><rect x="465" y="202.67" width="32" height="106.67"/>';
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

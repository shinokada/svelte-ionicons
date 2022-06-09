<script lang="ts">
	export let size = '24';
	export let variation: 'regular' | 'outline' | 'sharp' = 'regular';
	let svgpath: string;
	let svgregular =
		'<polyline points="112 268 256 412 400 268" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/><line x1="256" y1="392" x2="256" y2="100" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/>';
	let svgoutline =
		'<polyline points="112 268 256 412 400 268" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/><line x1="256" y1="392" x2="256" y2="100" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/>';
	let svgsharp =
		'<polyline points="112 268 256 412 400 268" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"/><line x1="256" y1="392" x2="256" y2="100" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"/>';
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

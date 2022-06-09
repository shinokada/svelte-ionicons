<script lang="ts">
	export let size = '24';
	export let variation: 'regular' | 'outline' | 'sharp' = 'regular';
	let svgpath: string;
	let svgregular =
		'<polyline points="268 112 412 256 268 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/><line x1="392" y1="256" x2="100" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/>';
	let svgoutline =
		'<polyline points="268 112 412 256 268 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/><line x1="392" y1="256" x2="100" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/>';
	let svgsharp =
		'<polyline points="268 112 412 256 268 400" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"/><line x1="392" y1="256" x2="100" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"/>';
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

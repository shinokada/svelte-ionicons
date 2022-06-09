<script lang="ts">
	export let size = '24';
	export let variation: 'regular' | 'outline' | 'sharp' = 'regular';
	let svgpath: string;
	let svgregular =
		'<polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"/><polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"/><polyline points="192 288.1 256 352 320 288.1" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"/><line x1="256" y1="160" x2="256" y2="336.03" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"/>';
	let svgoutline =
		'<polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="192 288.1 256 352 320 288.1" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="160" x2="256" y2="336.03" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>';
	let svgsharp =
		'<polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"/><polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"/><polyline points="192 288.1 256 352 320 288.1" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"/><line x1="256" y1="160" x2="256" y2="336.03" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"/>';
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

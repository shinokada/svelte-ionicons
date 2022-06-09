<script lang="ts">
	export let size = '24';
	export let variation: 'regular' | 'outline' | 'sharp' = 'regular';
	let svgpath: string;
	let svgregular =
		'<circle cx="256" cy="256" r="26" style="stroke:#000;stroke-miterlimit:10;stroke-width:10px"/><circle cx="346" cy="256" r="26" style="stroke:#000;stroke-miterlimit:10;stroke-width:10px"/><circle cx="166" cy="256" r="26" style="stroke:#000;stroke-miterlimit:10;stroke-width:10px"/><polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"/><polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"/>';
	let svgoutline =
		'<circle cx="256" cy="256" r="26"/><circle cx="346" cy="256" r="26"/><circle cx="166" cy="256" r="26"/><polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>';
	let svgsharp =
		'<circle cx="256" cy="256" r="26" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px"/><circle cx="346" cy="256" r="26" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px"/><circle cx="166" cy="256" r="26" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px"/><polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"/><polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"/>';
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

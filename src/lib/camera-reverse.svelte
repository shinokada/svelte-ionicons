<script lang="ts">
	export let size = '24';
	export let variation: 'regular' | 'outline' | 'sharp' = 'regular';
	let svgpath: string;
	let svgregular =
		'<path d="M432,144H373c-3,0-6.72-1.94-9.62-5L337.44,98.06a15.52,15.52,0,0,0-1.37-1.85C327.11,85.76,315,80,302,80H210c-13,0-25.11,5.76-34.07,16.21a15.52,15.52,0,0,0-1.37,1.85l-25.94,41c-2.22,2.42-5.34,5-8.62,5v-8a16,16,0,0,0-16-16H100a16,16,0,0,0-16,16v8H80a48.05,48.05,0,0,0-48,48V384a48.05,48.05,0,0,0,48,48H432a48.05,48.05,0,0,0,48-48V192A48.05,48.05,0,0,0,432,144ZM316.84,346.3a96.06,96.06,0,0,1-155.66-59.18,16,16,0,0,1-16.49-26.43l20-20a16,16,0,0,1,22.62,0l20,20A16,16,0,0,1,196,288a17.31,17.31,0,0,1-2-.14,64.07,64.07,0,0,0,102.66,33.63,16,16,0,1,1,20.21,24.81Zm50.47-63-20,20a16,16,0,0,1-22.62,0l-20-20a16,16,0,0,1,13.09-27.2A64,64,0,0,0,215,222.64,16,16,0,1,1,194.61,198a96,96,0,0,1,156,59,16,16,0,0,1,16.72,26.35Z"/>';
	let svgoutline =
		'<path d="M350.54,148.68l-26.62-42.06C318.31,100.08,310.62,96,302,96H210c-8.62,0-16.31,4.08-21.92,10.62l-26.62,42.06C155.85,155.23,148.62,160,140,160H80a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32H432a32,32,0,0,0,32-32V192a32,32,0,0,0-32-32H373C364.35,160,356.15,155.23,350.54,148.68Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="124 158 124 136 100 136 100 158" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M335.76,285.22V271.91a80,80,0,0,0-131-61.6M176,258.78v13.31a80,80,0,0,0,130.73,61.8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="196 272 176 252 156 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="356 272 336 292 316 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>';
	let svgsharp =
		'<path d="M456,144H373c-3,0-6.72-1.94-9.62-5L336.07,96.21C326,80,320,80,302,80H210c-18,0-23,0-34.07,16.21L148.62,139c-2.22,2.42-5.34,5-8.62,5V128a8,8,0,0,0-8-8H92a8,8,0,0,0-8,8v16H56a24,24,0,0,0-24,24V408a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V168A24,24,0,0,0,456,144ZM256,368c-47.82,0-87.76-34.23-95-80H117.37L176,229.37,234.63,288H194a64.07,64.07,0,0,0,102.63,33.49L320,343l-3.68,3.72A96.64,96.64,0,0,1,256,368Zm80-53.84L277.11,256H318a64.26,64.26,0,0,0-103-33.36L192,200l3.14-2.45A96.19,96.19,0,0,1,255.76,176c47.85,0,87,34.19,94.24,80h44.92Z"/>';
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

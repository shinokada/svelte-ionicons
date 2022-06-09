<script lang="ts">
	export let size = '24';
	export let variation: 'regular' | 'outline' | 'sharp' = 'regular';
	let svgpath: string;
	let svgregular =
		'<path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM242.11,240.47l51.55-59a16,16,0,0,1,24.1,21.06l-51.55,59a16,16,0,1,1-24.1-21.06Zm-38.86,90.85a16,16,0,0,1-22.62,0l-47.95-48a16,16,0,1,1,22.64-22.62l48,48A16,16,0,0,1,203.25,331.32Zm176.8-128.79-111.88,128A16,16,0,0,1,256.66,336h-.54a16,16,0,0,1-11.32-4.69l-47.94-48a16,16,0,1,1,22.64-22.62l29.8,29.83a8,8,0,0,0,11.68-.39l95-108.66a16,16,0,0,1,24.1,21.06Z"/>';
	let svgoutline =
		'<path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"/><polyline points="368 192 256.13 320 208.18 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="191.95" y1="320" x2="144" y2="272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="305.71" y1="192" x2="254.16" y2="251" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>';
	let svgsharp =
		'<path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm48.19,121.42,24.1,21.06-73.61,84.1-24.1-23.06ZM191.93,342.63,121.37,272,144,249.37,214.57,320Zm65,.79L185.55,272l22.64-22.62,47.16,47.21L366.48,169.42l24.1,21.06Z"/>';
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

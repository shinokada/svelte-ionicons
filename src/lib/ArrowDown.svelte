<script>
	export let size = '24';
	export let color = 'currentColor';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 512 512"
	{...$$restProps}
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	><polyline
		points="112 268 256 412 400 268"
		style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/><line
		x1="256"
		y1="392"
		x2="256"
		y2="100"
		style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/></svg
>

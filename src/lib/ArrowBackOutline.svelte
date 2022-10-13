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
		points="244 400 100 256 244 112"
		style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/><line
		x1="120"
		y1="256"
		x2="412"
		y2="256"
		style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/></svg
>

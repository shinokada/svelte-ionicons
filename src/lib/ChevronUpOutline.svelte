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
		points="112 328 256 184 400 328"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/></svg
>

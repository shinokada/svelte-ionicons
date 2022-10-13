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
		points="328 112 184 256 328 400"
		style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"
	/></svg
>

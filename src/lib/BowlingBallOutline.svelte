<script>
	export let size = '24';
	export let color = 'currentColor';
</script>

<svg
	id="icons"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 512 512"
	{...$$restProps}
	width={size}
	height={size}
	fill={color}
	class={$$props.class}
	><circle
		cx="256"
		cy="256"
		r="208"
		fill="none"
		stroke={color}
		stroke-miterlimit="10"
		stroke-width="32"
	/><circle cx="288" cy="200" r="24" /><circle cx="296" cy="128" r="24" /><circle
		cx="360"
		cy="168"
		r="24"
	/></svg
>

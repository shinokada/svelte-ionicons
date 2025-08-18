<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		color = ctx.color || 'currentColor',
		title,
		desc,
		ariaLabel = 'nuclear outline',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
	{role}
	width={size}
	height={size}
	fill={color}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	viewBox="0 0 512 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<circle
		cx="256"
		cy="256"
		r="192"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
	/><circle
		cx="256"
		cy="256"
		r="64"
		style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
	/><line
		x1="224"
		y1="192"
		x2="171"
		y2="85"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
	/><line
		x1="288"
		y1="192"
		x2="341"
		y2="85"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
	/><line
		x1="327.55"
		y1="255.81"
		x2="446.96"
		y2="255.94"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
	/><line
		x1="299.09"
		y1="313.13"
		x2="371.34"
		y2="408.19"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
	/><line
		x1="184.45"
		y1="255.81"
		x2="65.04"
		y2="255.94"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
	/><line
		x1="212.91"
		y1="313.13"
		x2="140.66"
		y2="408.19"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: size: any = ctx.size || '24';
@props:role: any = ctx.role || 'img';
@props:color: any = ctx.color || 'currentColor';
@props:title: any;
@props:desc: any;
@props:ariaLabel: any = 'nuclear outline';
-->

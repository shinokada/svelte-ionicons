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
		ariaLabel = 'stopwatch outline',
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
	<line
		x1="256"
		y1="232"
		x2="256"
		y2="152"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><line
		x1="256"
		y1="88"
		x2="256"
		y2="72"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/><line
		x1="132"
		y1="132"
		x2="120"
		y2="120"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/><circle
		cx="256"
		cy="272"
		r="32"
		style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
	/><path
		d="M256,96A176,176,0,1,0,432,272,176,176,0,0,0,256,96Z"
		style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
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
@props:ariaLabel: any = 'stopwatch outline';
-->

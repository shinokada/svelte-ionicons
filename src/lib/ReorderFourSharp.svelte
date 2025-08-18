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
		ariaLabel = 'reorder four sharp',
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
		x1="102"
		y1="304"
		x2="410"
		y2="304"
		style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
	/><line
		x1="102"
		y1="208"
		x2="410"
		y2="208"
		style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
	/><line
		x1="102"
		y1="112"
		x2="410"
		y2="112"
		style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
	/><line
		x1="102"
		y1="400"
		x2="410"
		y2="400"
		style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
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
@props:ariaLabel: any = 'reorder four sharp';
-->

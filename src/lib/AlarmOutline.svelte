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
		ariaLabel = 'alarm outline',
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
	<path
		d="M416.07,272a160,160,0,1,0-160,160A160,160,0,0,0,416.07,272Z"
		style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
	/><path
		d="M142.12,91.21A46.67,46.67,0,0,0,112,80l-2.79.08C83.66,81.62,64,104,64.07,131c0,13.21,4.66,19.37,10.88,27.23A4.55,4.55,0,0,0,78.19,160h.88a3.23,3.23,0,0,0,2.54-1.31L142.38,99a5.38,5.38,0,0,0,1.55-4A5.26,5.26,0,0,0,142.12,91.21Z"
		style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
	/><path
		d="M369.88,91.21A46.67,46.67,0,0,1,400,80l2.79.08C428.34,81.62,448,104,447.93,131c0,13.21-4.66,19.37-10.88,27.23a4.55,4.55,0,0,1-3.24,1.76h-.88a3.23,3.23,0,0,1-2.54-1.31L369.62,99a5.38,5.38,0,0,1-1.55-4A5.26,5.26,0,0,1,369.88,91.21Z"
		style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
	/><polyline
		points="256.07 160 256.07 272 176.07 272"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><line
		x1="416.07"
		y1="432"
		x2="376.07"
		y2="392"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><line
		x1="96.07"
		y1="432"
		x2="136.07"
		y2="392"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
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
@props:ariaLabel: any = 'alarm outline';
-->

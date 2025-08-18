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
		ariaLabel = 'magnet sharp',
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
		x1="191.98"
		y1="463.58"
		x2="191.98"
		y2="415.58"
		style="stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
	/><line
		x1="90.16"
		y1="421.4"
		x2="124.1"
		y2="387.46"
		style="stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
	/><line
		x1="47.98"
		y1="319.58"
		x2="95.98"
		y2="319.58"
		style="stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
	/><path
		d="M422.2,89.82a144,144,0,0,0-203.71-.07l-67.88,67.88,67.88,67.89,67.88-67.89a48,48,0,0,1,68.46.59c18.3,18.92,17.48,49.24-1.14,67.86L286.37,293.4l67.88,67.88,66.91-66.91C477.53,238,478.53,146.22,422.2,89.82Z"
	/><rect
		x="107.29"
		y="188.83"
		width="64"
		height="96"
		transform="translate(-126.67 167.86) rotate(-45)"
	/><rect
		x="243.06"
		y="324.59"
		width="64"
		height="96"
		transform="translate(-182.9 303.62) rotate(-45)"
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
@props:ariaLabel: any = 'magnet sharp';
-->

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
		ariaLabel = 'desktop outline',
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
	<rect
		x="32"
		y="64"
		width="448"
		height="320"
		rx="32"
		ry="32"
		style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
	/><polygon
		points="304 448 296 384 216 384 208 448 304 448"
		style="stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><line
		x1="368"
		y1="448"
		x2="144"
		y2="448"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><path
		d="M32,304v48a32.09,32.09,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V304Zm224,64a16,16,0,1,1,16-16A16,16,0,0,1,256,368Z"
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
@props:ariaLabel: any = 'desktop outline';
-->

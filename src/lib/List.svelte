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
		ariaLabel = 'list',
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
		x1="160"
		y1="144"
		x2="448"
		y2="144"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/><line
		x1="160"
		y1="256"
		x2="448"
		y2="256"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/><line
		x1="160"
		y1="368"
		x2="448"
		y2="368"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
	/><circle
		cx="80"
		cy="144"
		r="16"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><circle
		cx="80"
		cy="256"
		r="16"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><circle
		cx="80"
		cy="368"
		r="16"
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
@props:ariaLabel: any = 'list';
-->

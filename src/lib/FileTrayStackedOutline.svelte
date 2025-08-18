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
		ariaLabel = 'file tray stacked outline',
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
		d="M48,336v96a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V336"
		style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
	/><line
		x1="48"
		y1="336"
		x2="192"
		y2="336"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><line
		x1="320"
		y1="336"
		x2="464"
		y2="336"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><path
		d="M192,336a64,64,0,0,0,128,0"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><path
		d="M384,32H128c-26,0-43,14-48,40L48,192v96a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V192L432,72C427,45,409,32,384,32Z"
		style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
	/><line
		x1="48"
		y1="192"
		x2="192"
		y2="192"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><line
		x1="320"
		y1="192"
		x2="464"
		y2="192"
		style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
	/><path
		d="M192,192a64,64,0,0,0,128,0"
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
@props:ariaLabel: any = 'file tray stacked outline';
-->

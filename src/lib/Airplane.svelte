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
		ariaLabel = 'airplane',
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
		d="M186.62,464H160a16,16,0,0,1-14.57-22.6l64.46-142.25L113.1,297,77.8,339.77C71.07,348.23,65.7,352,52,352H34.08a17.66,17.66,0,0,1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38,0,0,0,0-.15,14.82,14.82,0,0,1-.53-1.59L16.92,182.76c-2.15-7.61.2-12.93,2.56-16.06a16.83,16.83,0,0,1,13.6-6.7H52c10.23,0,20.16,4.59,26,12l34.57,42.05,97.32-1.44-64.44-142A16,16,0,0,1,160,48h26.91a25,25,0,0,1,19.35,9.8l125.05,152,57.77-1.52c4.23-.23,15.95-.31,18.66-.31C463,208,496,225.94,496,256c0,9.46-3.78,27-29.07,38.16-14.93,6.6-34.85,9.94-59.21,9.94-2.68,0-14.37-.08-18.66-.31l-57.76-1.54-125.36,152A25,25,0,0,1,186.62,464Z"
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
@props:ariaLabel: any = 'airplane';
-->

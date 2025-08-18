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
		ariaLabel = 'sparkles outline',
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
		d="M259.92,262.91,216.4,149.77a9,9,0,0,0-16.8,0L156.08,262.91a9,9,0,0,1-5.17,5.17L37.77,311.6a9,9,0,0,0,0,16.8l113.14,43.52a9,9,0,0,1,5.17,5.17L199.6,490.23a9,9,0,0,0,16.8,0l43.52-113.14a9,9,0,0,1,5.17-5.17L378.23,328.4a9,9,0,0,0,0-16.8L265.09,268.08A9,9,0,0,1,259.92,262.91Z"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="32"
	/><polygon
		points="108 68 88 16 68 68 16 88 68 108 88 160 108 108 160 88 108 68"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="32"
	/><polygon
		points="426.67 117.33 400 48 373.33 117.33 304 144 373.33 170.67 400 240 426.67 170.67 496 144 426.67 117.33"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="32"
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
@props:ariaLabel: any = 'sparkles outline';
-->

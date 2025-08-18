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
		ariaLabel = 'extension puzzle outline',
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
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="32"
		d="M413.66,246.1H386a2,2,0,0,1-2-2V166.86A38.86,38.86,0,0,0,345.14,128H267.9a2,2,0,0,1-2-2V98.34c0-27.14-21.5-49.86-48.64-50.33a49.53,49.53,0,0,0-50.4,49.51V126a2,2,0,0,1-2,2H87.62A39.74,39.74,0,0,0,48,167.62V238a2,2,0,0,0,2,2H76.91c29.37,0,53.68,25.48,54.09,54.85.42,29.87-23.51,57.15-53.29,57.15H50a2,2,0,0,0-2,2v70.38A39.74,39.74,0,0,0,87.62,464H158a2,2,0,0,0,2-2V441.07c0-30.28,24.75-56.35,55-57.06,30.1-.7,57,20.31,57,50.28V462a2,2,0,0,0,2,2h71.14A38.86,38.86,0,0,0,384,425.14v-78a2,2,0,0,1,2-2h28.48c27.63,0,49.52-22.67,49.52-50.4S440.8,246.1,413.66,246.1Z"
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
@props:ariaLabel: any = 'extension puzzle outline';
-->

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
		ariaLabel = 'cellular',
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
		d="M472,432H424a24,24,0,0,1-24-24V104a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,472,432Z"
	/><path
		d="M344,432H296a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,344,432Z"
	/><path
		d="M216,432H168a24,24,0,0,1-24-24V248a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,216,432Z"
	/><path
		d="M88,432H40a24,24,0,0,1-24-24V312a24,24,0,0,1,24-24H88a24,24,0,0,1,24,24v96A24,24,0,0,1,88,432Z"
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
@props:ariaLabel: any = 'cellular';
-->

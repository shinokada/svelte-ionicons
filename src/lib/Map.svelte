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
		ariaLabel = 'map',
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
		d="M48.17,113.34A32,32,0,0,0,32,141.24V438a32,32,0,0,0,47,28.37c.43-.23.85-.47,1.26-.74l84.14-55.05a8,8,0,0,0,3.63-6.72V46.45a8,8,0,0,0-12.51-6.63Z"
	/><path
		d="M212.36,39.31A8,8,0,0,0,200,46V403.56a8,8,0,0,0,3.63,6.72l96,62.42A8,8,0,0,0,312,466V108.67a8,8,0,0,0-3.64-6.73Z"
	/><path
		d="M464.53,46.47a31.64,31.64,0,0,0-31.5-.88,12.07,12.07,0,0,0-1.25.74l-84.15,55a8,8,0,0,0-3.63,6.72V465.51a8,8,0,0,0,12.52,6.63l107.07-73.46a32,32,0,0,0,16.41-28v-296A32.76,32.76,0,0,0,464.53,46.47Z"
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
@props:ariaLabel: any = 'map';
-->

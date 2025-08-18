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
		ariaLabel = 'cloud done sharp',
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
		d="M414.25,225.36c-6.52-41.18-24.05-76.4-51.11-102.46A153.57,153.57,0,0,0,256,80c-35.5,0-68.24,11.69-94.68,33.8a156.42,156.42,0,0,0-45.22,63.61c-30.26,4.81-57.45,17.18-77.38,35.37C13.39,235.88,0,267.42,0,304c0,36,14.38,68.88,40.49,92.59C65.64,419.43,99.56,432,136,432H396c32.37,0,60.23-8.57,80.59-24.77C499.76,388.78,512,361.39,512,328,512,266.15,463.56,232.66,414.25,225.36Zm-204.63,135-69.22-76.7,23.76-21.44,44.62,49.46,106.29-126.2,24.47,20.61Z"
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
@props:ariaLabel: any = 'cloud done sharp';
-->

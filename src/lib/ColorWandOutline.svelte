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
    ariaLabel = 'color wand outline',
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
    fill="none"
    stroke="currentColor"
    stroke-miterlimit="10"
    stroke-width="32"
    x="280.48"
    y="122.9"
    width="63.03"
    height="378.2"
    rx="31.52"
    transform="translate(-129.23 312) rotate(-45)"
  /><path
    d="M178.38,178.38h0a31.64,31.64,0,0,0,0,44.75L223.25,268,268,223.25l-44.87-44.87A31.64,31.64,0,0,0,178.38,178.38Z"
  /><line
    stroke="currentColor"
    stroke-miterlimit="10"
    stroke-width="32"
    stroke-linecap="round"
    x1="48"
    y1="192"
    x2="96"
    y2="192"
  /><line
    stroke="currentColor"
    stroke-miterlimit="10"
    stroke-width="32"
    stroke-linecap="round"
    x1="90.18"
    y1="90.18"
    x2="124.12"
    y2="124.12"
  /><line
    stroke="currentColor"
    stroke-miterlimit="10"
    stroke-width="32"
    stroke-linecap="round"
    x1="192"
    y1="48"
    x2="192"
    y2="96"
  /><line
    stroke="currentColor"
    stroke-miterlimit="10"
    stroke-width="32"
    stroke-linecap="round"
    x1="293.82"
    y1="90.18"
    x2="259.88"
    y2="124.12"
  /><line
    stroke="currentColor"
    stroke-miterlimit="10"
    stroke-width="32"
    stroke-linecap="round"
    x1="124.12"
    y1="259.88"
    x2="90.18"
    y2="293.82"
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
@props:ariaLabel: any = 'color wand outline';
-->

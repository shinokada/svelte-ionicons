<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'storefront outline',
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
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
    x1="448"
    y1="448"
    x2="448"
    y2="240"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
    x1="64"
    y1="240"
    x2="64"
    y2="448"
  /><path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
    d="M382.47,48H129.53C107.74,48,88.06,60,79.6,78.46L36.3,173c-14.58,31.81,9.63,67.85,47.19,69q1,0,2,0c31.4,0,56.85-25.18,56.85-52.23,0,27,25.46,52.23,56.86,52.23S256,218.62,256,189.77c0,27,25.45,52.23,56.85,52.23s56.86-23.38,56.86-52.23c0,28.85,25.45,52.23,56.85,52.23q1,0,1.95,0c37.56-1.17,61.77-37.21,47.19-69L432.4,78.46C423.94,60,404.26,48,382.47,48Z"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
    x1="32"
    y1="464"
    x2="480"
    y2="464"
  /><path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
    d="M136,288h80a24,24,0,0,1,24,24v88a0,0,0,0,1,0,0H112a0,0,0,0,1,0,0V312A24,24,0,0,1,136,288Z"
  /><path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
    d="M288,464V312a24,24,0,0,1,24-24h64a24,24,0,0,1,24,24V464"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

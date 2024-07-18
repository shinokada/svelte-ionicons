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
    ariaLabel = 'prism',
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
    d="M487.83,319.44,295.63,36.88a48,48,0,0,0-79.26,0L24.17,319.44A47.1,47.1,0,0,0,41.1,387.57L233.3,490.32a48.05,48.05,0,0,0,45.4,0L470.9,387.57a47.1,47.1,0,0,0,16.93-68.13Zm-431.26,41a16.12,16.12,0,0,1-8-10.38,16.8,16.8,0,0,1,2.37-13.62L232.66,69.26c2.18-3.21,7.34-1.72,7.34,2.13v374c0,5.9-6.54,9.63-11.87,6.78Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

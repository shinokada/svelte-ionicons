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
    ariaLabel = 'ice cream sharp',
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
    d="M359.72,112.37a104,104,0,0,0-207.44,0A80.12,80.12,0,0,0,80,192c0,39.36,26.37,71.23,62.38,78.46a2,2,0,0,1,1.62,2v38.83c0,21.84,17.2,40.22,39,40.74a40,40,0,0,0,41-40V264.19a2,2,0,0,1,2.72-1.86A83.47,83.47,0,0,0,256,268a63.18,63.18,0,0,0,42.24-16.59,2,2,0,0,1,2.74,0A74.63,74.63,0,0,0,352,272a80,80,0,0,0,7.72-159.63Z"
  /><path
    d="M256,300v12a72.1,72.1,0,0,1-58.21,70.64L256,496l92.06-192.08a105.29,105.29,0,0,1-49.18-14.36A93.75,93.75,0,0,1,256,300Z"
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
@props:ariaLabel: any = 'ice cream sharp';
-->

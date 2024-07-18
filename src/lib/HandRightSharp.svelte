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
    ariaLabel = 'hand right sharp',
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
    d="M82.42,209.08h0c15.06-6.62,32.38,1.31,38.5,17.62L156,312h11.27V80c0-17.6,13.3-32,29.55-32h0c16.26,0,29.55,14.4,29.55,32V231.75l14.78.25V32c0-17.6,13.3-32,29.55-32h0C287,0,300.25,14.4,300.25,32V231.75L315,232V64c0-17.6,13.3-32,29.55-32h0c16.26,0,29.55,14.4,29.55,32V247.75l14.78.25V128c0-17.6,13.3-32,29.55-32h0C434.7,96,448,110.4,448,128V344c0,75.8-37.13,168-169,168-40.8,0-79.42-7-100.66-21a121.41,121.41,0,0,1-33.72-33.31,138,138,0,0,1-16-31.78L66.16,250.77C60.05,234.46,67.36,215.71,82.42,209.08Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

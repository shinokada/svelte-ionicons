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
    ariaLabel = 'thermometer',
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
    d="M320,287.18V81c0-35.12-27.89-64.42-63-64.95a64.08,64.08,0,0,0-65,64V287.18a8,8,0,0,1-3.18,6.37A113.48,113.48,0,0,0,144,384a112,112,0,0,0,224,0,113.48,113.48,0,0,0-44.82-90.45A8,8,0,0,1,320,287.18ZM254.07,432a48,48,0,0,1-22-89.54,16,16,0,0,0,8-13.84V112.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,112V328.58a16.18,16.18,0,0,0,8.15,13.94A48,48,0,0,1,254.07,432Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

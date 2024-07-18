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
    ariaLabel = 'basket sharp',
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
  <path d="M339.2,217.6,256,106.67,172.8,217.6l-25.6-19.2,96-128a16,16,0,0,1,25.6,0l96,128Z" /><path
    d="M441.59,192H70.41a12,12,0,0,0-11.68,14.77L112.59,434H399.41l53.86-227.23A12,12,0,0,0,441.59,192ZM256,351.66A37.71,37.71,0,1,1,293.89,314,37.88,37.88,0,0,1,256,351.66Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

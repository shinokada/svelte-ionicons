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
    ariaLabel = 'link outline',
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
    d="M208,352H144a96,96,0,0,1,0-192h64"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:36px"
  /><path
    d="M304,160h64a96,96,0,0,1,0,192H304"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:36px"
  /><line
    x1="163.29"
    y1="256"
    x2="350.71"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:36px"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

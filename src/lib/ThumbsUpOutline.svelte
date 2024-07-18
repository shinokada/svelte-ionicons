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
    ariaLabel = 'thumbs up outline',
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
    d="M320,458.16S304,464,256,464s-74-16-96-32H96a64,64,0,0,1-64-64V320a64,64,0,0,1,64-64h30a32.34,32.34,0,0,0,27.37-15.4S162,221.81,188,176.78,264,64,272,48c29,0,43,22,34,47.71-10.28,29.39-23.71,54.38-27.46,87.09-.54,4.78,3.14,12,7.95,12L416,205"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M416,271l-80-2c-20-1.84-32-12.4-32-30h0c0-17.6,14-28.84,32-30l80-4c17.6,0,32,16.4,32,34v.17A32,32,0,0,1,416,271Z"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M448,336l-112-2c-18-.84-32-12.41-32-30h0c0-17.61,14-28.86,32-30l112-2a32.1,32.1,0,0,1,32,32h0A32.1,32.1,0,0,1,448,336Z"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M400,464l-64-3c-21-1.84-32-11.4-32-29h0c0-17.6,14.4-30,32-30l64-2a32.09,32.09,0,0,1,32,32h0A32.09,32.09,0,0,1,400,464Z"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M432,400l-96-2c-19-.84-32-12.4-32-30h0c0-17.6,13-28.84,32-30l96-2a32.09,32.09,0,0,1,32,32h0A32.09,32.09,0,0,1,432,400Z"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

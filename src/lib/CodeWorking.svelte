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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <circle
    cx="256"
    cy="256"
    r="26"
    style="stroke:{color};stroke-miterlimit:10;stroke-width:10px"
  /><circle
    cx="346"
    cy="256"
    r="26"
    style="stroke:{color};stroke-miterlimit:10;stroke-width:10px"
  /><circle
    cx="166"
    cy="256"
    r="26"
    style="stroke:{color};stroke-miterlimit:10;stroke-width:10px"
  /><polyline
    points="160 368 32 256 160 144"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"
  /><polyline
    points="352 368 480 256 352 144"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"
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
@props:focusable: any = 'false';
@props:ariaLabel: any;
-->

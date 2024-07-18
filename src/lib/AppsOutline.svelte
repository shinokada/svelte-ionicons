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
    ariaLabel = 'apps outline',
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
    x="64"
    y="64"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="216"
    y="64"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="368"
    y="64"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="64"
    y="216"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="216"
    y="216"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="368"
    y="216"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="64"
    y="368"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="216"
    y="368"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="368"
    y="368"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

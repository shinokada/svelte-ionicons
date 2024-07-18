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
    ariaLabel = 'checkmark done sharp',
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
  <polyline
    points="465 127 241 384 149 292"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
  /><line
    x1="140"
    y1="385"
    x2="47"
    y2="292"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
  /><line
    x1="363"
    y1="127"
    x2="236"
    y2="273"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

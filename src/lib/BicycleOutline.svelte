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
    ariaLabel = 'bicycle outline',
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
    d="M388,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M124,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><polyline
    points="256 360 256 274 192 232 272 144 312 216 368 216"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><path d="M320,136a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,72a32,32,0,1,0-.2,64Z" />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

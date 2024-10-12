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
    ariaLabel = 'keypad outline',
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
  <circle
    cx="256"
    cy="448"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="256"
    cy="320"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M288,192a32,32,0,1,1-32-32A32,32,0,0,1,288,192Z"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="256"
    cy="64"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="384"
    cy="320"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="384"
    cy="192"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="384"
    cy="64"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="128"
    cy="320"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="128"
    cy="192"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="128"
    cy="64"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  />
</svg>

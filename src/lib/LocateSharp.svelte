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
    ariaLabel = 'locate sharp',
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
  <line
    x1="256"
    y1="96"
    x2="256"
    y2="56"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
  /><line
    x1="256"
    y1="456"
    x2="256"
    y2="416"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
  /><path
    d="M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
  /><line
    x1="416"
    y1="256"
    x2="456"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
  /><line
    x1="56"
    y1="256"
    x2="96"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
  />
</svg>

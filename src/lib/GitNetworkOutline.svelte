<script lang='ts'>
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types'
  
  const ctx: CtxType = getContext('iconCtx') ?? {};

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor', 
    title, 
    desc, 
    ariaLabel =  "git network outline" , 
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
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
    <circle cx="128" cy="96" r="48" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="256" cy="416" r="48" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="256" x2="256" y2="368" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="384" cy="96" r="48" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M128,144c0,74.67,68.92,112,128,112" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M384,144c0,74.67-68.92,112-128,112" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
</svg>

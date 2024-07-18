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
    ariaLabel =  "cloud done outline" , 
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
    <path d="M400,240c-8.89-89.54-71-144-144-144-69,0-113.44,48.2-128,96C68,198,16,235.59,16,304c0,66,54,112,120,112H396c55,0,100-27.44,100-88C496,268.18,443,242.24,400,240Z" style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"/><polyline points="317 208 209.2 336 163 284.8" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
</svg>

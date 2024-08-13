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
    ariaLabel =  "cellular outline" , 
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
    <rect x="416" y="96" width="64" height="320" rx="8" ry="8" style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"/><rect x="288" y="176" width="64" height="240" rx="8" ry="8" style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"/><rect x="160" y="240" width="64" height="176" rx="8" ry="8" style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"/><rect x="32" y="304" width="64" height="112" rx="8" ry="8" style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"/>
</svg>

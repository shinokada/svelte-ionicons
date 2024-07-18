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
    ariaLabel =  "swap horizontal outline" , 
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
    <polyline points="304 48 416 160 304 272" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="398.87" y1="160" x2="96" y2="160" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="208 464 96 352 208 240" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="114" y1="352" x2="416" y2="352" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
</svg>

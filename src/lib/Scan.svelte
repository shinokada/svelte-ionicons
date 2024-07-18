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
    ariaLabel =  "scan" , 
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
    <path d="M342,444h46a56,56,0,0,0,56-56V342" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"/><path d="M444,170V124a56,56,0,0,0-56-56H342" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"/><path d="M170,444H124a56,56,0,0,1-56-56V342" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"/><path d="M68,170V124a56,56,0,0,1,56-56h46" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"/>
</svg>

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
    ariaLabel =  "gift outline" , 
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
    <path d="M256,104v56h56a56,56,0,1,0-56-56Z" style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><path d="M256,104c0,15.46,0,56,0,56H200a56,56,0,1,1,56-56Z" style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M416,272V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V272" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="160" x2="256" y2="464" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
</svg>

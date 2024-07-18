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
    ariaLabel =  "library outline" , 
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
    <rect x="32" y="96" width="64" height="368" rx="16" ry="16" style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"/><line x1="112" y1="224" x2="240" y2="224" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="112" y1="400" x2="240" y2="400" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><rect x="112" y="160" width="128" height="304" rx="16" ry="16" style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"/><rect x="256" y="48" width="96" height="416" rx="16" ry="16" style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"/><path d="M422.46,96.11l-40.4,4.25c-11.12,1.17-19.18,11.57-17.93,23.1l34.92,321.59c1.26,11.53,11.37,20,22.49,18.84l40.4-4.25c11.12-1.17,19.18-11.57,17.93-23.1L445,115C443.69,103.42,433.58,94.94,422.46,96.11Z" style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"/>
</svg>

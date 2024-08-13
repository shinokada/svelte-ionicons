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
    ariaLabel =  "volume high sharp" , 
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
    <path d="M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><path d="M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><path d="M416,416c30-46,48-91.43,48-160S446,143,416,96" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><polygon points="125.65 176.1 32 176.1 32 335.9 125.65 335.9 256 440 256 72 125.65 176.1"/>
</svg>

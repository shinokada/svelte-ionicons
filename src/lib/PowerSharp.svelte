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
    ariaLabel =  "power sharp" , 
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
    <path d="M256,464C141.31,464,48,370.77,48,256.18A207.44,207.44,0,0,1,122.76,96.05l16.9-14,28.17,33.72-16.9,14A163.72,163.72,0,0,0,92,256.18c0,90.39,73.57,163.93,164,163.93s164-73.54,164-163.93a163.38,163.38,0,0,0-59.83-126.36l-17-14,28-33.82,17,14A207.13,207.13,0,0,1,464,256.18C464,370.77,370.69,464,256,464Z"/><rect x="234" y="48" width="44" height="224"/>
</svg>

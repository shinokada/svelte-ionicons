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
    ariaLabel =  "keypad" , 
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
    <path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/>
</svg>

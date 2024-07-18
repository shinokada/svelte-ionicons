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
    ariaLabel =  "calendar clear outline" , 
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
    <rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48"/><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="128" y1="48" x2="128" y2="80"/><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="384" y1="48" x2="384" y2="80"/><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="464" y1="160" x2="48" y2="160"/>
</svg>

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
    ariaLabel =  "filter circle outline" , 
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
    <path fill="none" stroke="currentColor" stroke-width="32" stroke-miterlimit="10" d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"/><line fill="none" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" x1="144" y1="208" x2="368" y2="208"/><line fill="none" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" x1="176" y1="272" x2="336" y2="272"/><line fill="none" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" x1="224" y1="336" x2="288" y2="336"/>
</svg>

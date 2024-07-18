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
    ariaLabel =  "tablet landscape" , 
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
    <path d="M512,128V384a64.07,64.07,0,0,1-64,64H64A64.07,64.07,0,0,1,0,384V128A64.07,64.07,0,0,1,64,64H448A64.07,64.07,0,0,1,512,128ZM32,384a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32V128a32,32,0,0,0-32-32H64a32,32,0,0,0-32,32Z"/><path d="M0,128A64.07,64.07,0,0,1,64,64H448a64.07,64.07,0,0,1,64,64V384a64.07,64.07,0,0,1-64,64H64A64.07,64.07,0,0,1,0,384V128M480,384V128a32,32,0,0,0-32-32H64a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32m-16,0a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H448a16,16,0,0,1,16,16V384Z"/>
</svg>

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
    ariaLabel =  "apps" , 
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
    <path d="M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z"/><path d="M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z"/><path d="M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z"/><path d="M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z"/><path d="M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z"/><path d="M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z"/><path d="M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z"/><path d="M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z"/><path d="M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z"/>
</svg>

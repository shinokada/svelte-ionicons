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
    ariaLabel =  "log in" , 
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
    <path d="M392,80H232a56.06,56.06,0,0,0-56,56V240H329.37l-52.68-52.69a16,16,0,0,1,22.62-22.62l80,80a16,16,0,0,1,0,22.62l-80,80a16,16,0,0,1-22.62-22.62L329.37,272H176V376c0,32.05,33.79,56,64,56H392a56.06,56.06,0,0,0,56-56V136A56.06,56.06,0,0,0,392,80Z"/><path d="M80,240a16,16,0,0,0,0,32h96V240Z"/>
</svg>

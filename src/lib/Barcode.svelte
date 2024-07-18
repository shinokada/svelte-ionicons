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
    ariaLabel =  "barcode" , 
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
    <path d="M419.13,96H419l-35.05.33L128,96h-.16l-36.74.33C66.93,96.38,48,116.07,48,141.2V371.47c0,25.15,19,44.86,43.2,44.86h.15l36.71-.33,255.92.33h.17l35.07-.33A44.91,44.91,0,0,0,464,371.13V140.87A44.92,44.92,0,0,0,419.13,96ZM144,320a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Zm64,32a16,16,0,0,1-32,0V160a16,16,0,0,1,32,0Zm64-16a16,16,0,0,1-32,0V176a16,16,0,0,1,32,0Zm64,16a16,16,0,0,1-32,0V160a16,16,0,0,1,32,0Zm64-32a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Z"/>
</svg>

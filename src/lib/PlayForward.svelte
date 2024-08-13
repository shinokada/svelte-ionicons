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
    ariaLabel =  "play forward" , 
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
    <path d="M481.29,229.47l-188.87-113a30.54,30.54,0,0,0-31.09-.39,33.74,33.74,0,0,0-16.76,29.47V224.6L63.85,116.44a30.54,30.54,0,0,0-31.09-.39A33.74,33.74,0,0,0,16,145.52v221A33.74,33.74,0,0,0,32.76,396a30.54,30.54,0,0,0,31.09-.39L244.57,287.4v79.08A33.74,33.74,0,0,0,261.33,396a30.54,30.54,0,0,0,31.09-.39l188.87-113a31.27,31.27,0,0,0,0-53Z"/>
</svg>

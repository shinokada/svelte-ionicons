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
    ariaLabel =  "shield" , 
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
    <path d="M479.07,111.35A16,16,0,0,0,465.92,96.6C379.89,81.18,343.69,69.12,266,34.16c-7.76-2.89-12.57-2.84-20,0-77.69,35-113.89,47-199.92,62.44a16,16,0,0,0-13.15,14.75c-3.85,61.1,4.34,118,24.36,169.15a348.86,348.86,0,0,0,71.43,112.41c44.67,47.43,94.2,75.12,119.74,85.6a20,20,0,0,0,15.11,0c27-10.92,74.69-37.82,119.71-85.62A348.86,348.86,0,0,0,454.71,280.5C474.73,229.36,482.92,172.45,479.07,111.35Z"/>
</svg>

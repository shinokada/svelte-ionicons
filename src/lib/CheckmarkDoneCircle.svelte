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
    ariaLabel =  "checkmark done circle" , 
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
    <path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM242.11,240.47l51.55-59a16,16,0,0,1,24.1,21.06l-51.55,59a16,16,0,1,1-24.1-21.06Zm-38.86,90.85a16,16,0,0,1-22.62,0l-47.95-48a16,16,0,1,1,22.64-22.62l48,48A16,16,0,0,1,203.25,331.32Zm176.8-128.79-111.88,128A16,16,0,0,1,256.66,336h-.54a16,16,0,0,1-11.32-4.69l-47.94-48a16,16,0,1,1,22.64-22.62l29.8,29.83a8,8,0,0,0,11.68-.39l95-108.66a16,16,0,0,1,24.1,21.06Z"/>
</svg>

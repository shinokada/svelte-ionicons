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
    ariaLabel =  "cloudy sharp" , 
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
    <path d="M376,432H116c-32.37,0-60.23-8.57-80.59-24.77C12.24,388.78,0,361.39,0,328c0-61.85,48.44-95.34,97.75-102.64,6.52-41.18,24-76.4,51.11-102.46A153.57,153.57,0,0,1,256,80c35.5,0,68.24,11.69,94.68,33.8a156.42,156.42,0,0,1,45.22,63.61c30.26,4.81,57.45,17.18,77.38,35.36C498.61,235.88,512,267.42,512,304c0,36-14.38,68.88-40.49,92.59C446.36,419.43,412.44,432,376,432Z"/>
</svg>

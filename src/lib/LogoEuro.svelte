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
    ariaLabel =  "logo euro" , 
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
    <path d="M231.8,272V224H376l8-48H231.8v-8.12c0-38.69,16.47-62.56,87.18-62.56,28.89,0,61.45,2.69,102.5,9.42l10.52-70A508.54,508.54,0,0,0,315.46,32C189.26,32,135,76.4,135,158.46V176l-55,0v48h55v48H80v48h55v33.54C135,435.6,189.23,480,315.43,480a507.76,507.76,0,0,0,116.44-12.78l-10.58-70c-41.05,6.73-73.46,9.42-102.35,9.42-70.7,0-87.14-20.18-87.14-67.94V320H360.27l7.87-48Z"/>
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

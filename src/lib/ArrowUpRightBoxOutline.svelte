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
    ariaLabel =  "arrow up right box outline" , 
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
     <path d="M388.364 242.764V421.455C388.364 432.738 383.881 443.56 375.902 451.539C367.924 459.518 357.102 464 345.818 464H90.5455C79.2617 464 68.4401 459.518 60.4613 451.539C52.4825 443.56 48 432.738 48 421.455V166.182C48 154.898 52.4825 144.076 60.4613 136.098C68.4401 128.119 79.2617 123.636 90.5455 123.636H269.236" stroke="black" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/> <path d="M464 180.364L464 48L331.636 48" stroke="black" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/> <path d="M216 296L464 48" stroke="black" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>  
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

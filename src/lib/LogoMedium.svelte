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
    ariaLabel =  "logo medium" , 
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
     <!-- Generator: Adobe Illustrator 24.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->  <g id="boxes" style="display:none;"> </g> <g id="icons"> 	<path d="M28,28v456h456V28H28z M406.83,136.04l-24.46,23.45c-2.11,1.61-3.15,4.25-2.72,6.86v172.28c-0.44,2.61,0.61,5.26,2.72,6.86 		l23.88,23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43,2.43-3.15,2.43-6.86V198.81l-68.79,174.71h-9.3l-80.09-174.71v117.1 		c-0.67,4.92,0.97,9.88,4.43,13.44l32.18,39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57,4.98-8.56,4.15-13.44V180.5 		c0.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65,150.55l60.35-150.55h84.66V136.04z"/> </g>  
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

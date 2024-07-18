<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'football sharp',
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
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM396.64,344.08H349.87l-16.89-29,15-60.44L377.79,242l42.65,36.71A164.87,164.87,0,0,1,396.64,344.08ZM134.21,242,164,254.67l15,60.44-16.89,29H115.36a164.87,164.87,0,0,1-23.8-65.34Zm249.07-92.47-18.41,52.33-31.12,13.18L277,167.46v-35l43.86-29.22A166.87,166.87,0,0,1,383.28,149.56ZM191.14,103.2,235,132.42v35l-56.75,47.61-31.12-13.18-18.41-52.33A166.87,166.87,0,0,1,191.14,103.2Zm26.44,314.3-20.1-50.66,16-27.51h85l16.06,27.53-20,50.6a166.23,166.23,0,0,1-77,0Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

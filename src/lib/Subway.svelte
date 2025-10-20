<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
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
    d="M352,16H160A64.07,64.07,0,0,0,96,80V336a64.07,64.07,0,0,0,64,64H352a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,352,16ZM208,64h96a16,16,0,0,1,0,32H208a16,16,0,0,1,0-32ZM176,352a32,32,0,1,1,32-32A32,32,0,0,1,176,352Zm160,0a32,32,0,1,1,32-32A32,32,0,0,1,336,352Zm48-160a16,16,0,0,1-16,16H144a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16H368a16,16,0,0,1,16,16Z"
  /><path
    d="M347.31,420.69a16,16,0,0,0-22.62,22.62l4.68,4.69H182.63l4.68-4.69a16,16,0,0,0-22.62-22.62l-48,48a16,16,0,1,0,22.62,22.62L150.63,480H361.37l11.32,11.31a16,16,0,0,0,22.62-22.62Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: size: any = ctx.size || '24';
@props:role: any = ctx.role || 'img';
@props:color: any = ctx.color || 'currentColor';
@props:title: any;
@props:desc: any;
@props:focusable: any = 'false';
@props:ariaLabel: any;
-->

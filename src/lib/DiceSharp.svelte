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
    ariaLabel = 'dice sharp',
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
    d="M48,366.92,240,480V284L48,170ZM192,288c8.84,0,16,10.75,16,24s-7.16,24-16,24-16-10.75-16-24S183.16,288,192,288ZM96,320c8.84,0,16,10.75,16,24s-7.16,24-16,24-16-10.75-16-24S87.16,320,96,320Z"
  /><path
    d="M272,284V480L464,366.92V170Zm48,140c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,424,320,424Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,336,320,336Zm96,32c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,368,416,368Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,280,416,280Zm32,77.64h0Z"
  /><path
    d="M256,32,64,144,256,256,448,144Zm0,120c-13.25,0-24-7.16-24-16s10.75-16,24-16,24,7.16,24,16S269.25,152,256,152Z"
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
@props:ariaLabel: any = 'dice sharp';
-->

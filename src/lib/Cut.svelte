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

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
    d="M103.48,224a71.64,71.64,0,0,0,44.76-15.66l41.5,16.89,6.82-12.63a39.15,39.15,0,0,1,4.32-6.37l14.22-14.42-41.17-24.94A72,72,0,1,0,103.48,224Zm0-112a40,40,0,1,1-40,40A40,40,0,0,1,103.48,112Z"
  /><path
    d="M480,169l-5.52-12.58c-4.48-10.42-14.74-16-32.78-17.85-10.12-1-26.95-1.24-49.69,3.81-20,4.45-122.14,28.2-164.95,58.62C206.81,215.39,203,234.67,200,250.16c-2.78,14.14-5,25.31-18,35-15,11.14-27.27,16.38-33.58,18.6a71.74,71.74,0,1,0,24.79,38ZM255.48,256a16,16,0,1,1,16-16A16,16,0,0,1,255.48,256Zm-152,144a40,40,0,1,1,40-40A40,40,0,0,1,103.48,400Z"
  /><path
    d="M343.79,259.87l-83.74,48.18,27.63,13.08,3.62,1.74C310,331.92,359.74,356,410.53,359c3.89.23,7.47.34,10.78.34C442,359.31,453,354,459.75,350L480,336Z"
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

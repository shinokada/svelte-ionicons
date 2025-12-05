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
  <path d="M480,272H442.66a261.41,261.41,0,0,1-18.25,32H480Z" /><path
    d="M32,240v32H69.34a225.1,225.1,0,0,1-12.4-32Z"
  /><path
    d="M304,259.78,252.27,363.24l-48-160L169.89,272H69.34c10,20.92,23.5,41.41,40.63,61.68,40.12,47.46,94.25,79.75,137,108.32l9,6,9-6c42.78-28.57,96.91-60.86,137-108.32A322.78,322.78,0,0,0,424.41,304h-98.3Z"
  /><path
    d="M211.73,116.76l48,160L304,188.22,345.89,272h96.77A213.13,213.13,0,0,0,464,176.65C463.37,114.54,413.54,64,352.92,64c-48.11,0-80.1,28-96.92,48.21C239.18,92,207.19,64,159.08,64,98.46,64,48.63,114.54,48,176.65A211.23,211.23,0,0,0,56.94,240h93.17Z"
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

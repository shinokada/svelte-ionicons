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
    ariaLabel = 'ribbon sharp',
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
    d="M256,336c-5.22,0-10.4-.24-15.51-.69A176.12,176.12,0,0,1,109.2,256.94L20,416H135l58,96,82.53-177.09A177.53,177.53,0,0,1,256,336Z"
  /><path d="M403,256.74a176.9,176.9,0,0,1-88.18,69.14L273.7,415.5,319,512l58-96H492Z" /><circle
    cx="256.02"
    cy="160"
    r="48"
  /><path
    d="M256,16c-79.4,0-144,64.6-144,144s64.6,144,144,144,144-64.6,144-144S335.4,16,256,16Zm0,224a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,240Z"
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
@props:ariaLabel: any = 'ribbon sharp';
-->

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
    ariaLabel = 'binoculars outline',
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
  <circle
    cx="392"
    cy="344"
    r="88"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle
    cx="120"
    cy="344"
    r="88"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M208 344V128C208 101.5 192 80 164 80C129 80 117.5 101.5 107 128C107 128 58.5 255.833 36 317.5"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M208 184C208 184 224.5 176 256 176C287.5 176 304 184 304 184"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M208 272C208 272 224.5 264 256 264C287.5 264 304 272 304 272"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M304 344V128C304 101.5 320 80 348 80C383 80 394.5 101.5 405 128C405 128 453.5 255.833 476 317.5"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
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
@props:ariaLabel: any = 'binoculars outline';
-->

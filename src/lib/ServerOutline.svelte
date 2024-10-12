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
    ariaLabel = 'server outline',
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
  <ellipse
    cx="256"
    cy="112"
    rx="176"
    ry="80"
    stroke="currentColor"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M432 112C432 112 432 376.055 432 400C432 444.183 353.202 480 256 480C158.798 480 80 444.183 80 400C80 378.169 80 112 80 112"
    stroke="currentColor"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M432 256C432 300.183 353.202 336 256 336C158.798 336 80 300.183 80 256"
    stroke="currentColor"
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
@props:ariaLabel: any = 'server outline';
-->

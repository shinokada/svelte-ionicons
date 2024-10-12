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
    ariaLabel = 'color wand sharp',
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
  <rect
    x="158.6"
    y="150.86"
    width="95.03"
    height="110.51"
    transform="translate(-85.38 206.12) rotate(-45)"
  /><polygon points="301.41 234.21 234.22 301.41 412 480 480 412 301.41 234.21" /><rect
    x="32"
    y="176"
    width="80"
    height="32"
  /><rect
    x="91.22"
    y="67.22"
    width="32"
    height="80"
    transform="translate(-44.41 107.22) rotate(-45)"
  /><rect x="176" y="32" width="32" height="80" /><rect
    x="236.92"
    y="91.22"
    width="80"
    height="32"
    transform="translate(5.29 227.22) rotate(-45)"
  /><rect
    x="67.22"
    y="260.92"
    width="80"
    height="32"
    transform="translate(-164.41 156.92) rotate(-45)"
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
@props:ariaLabel: any = 'color wand sharp';
-->

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
    ariaLabel = 'logo designernews',
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
  <polygon points="295.31 122.8 222.86 64 295.54 186.64 295.31 122.8" /><path
    d="M339.43,64V259.6h-41.6L225.6,141.28l1.94,118.32H181.71V131.2L139.09,96c1.14,1.44,2.28,2.88,3.31,4.44,11.43,16.68,17.14,36.6,17.14,60.6,0,59-35,98.52-87.88,98.52H0v.48L228.11,448H512V205.72Z"
  /><path
    d="M111.89,162.52c0-34.8-16.23-54.12-45.38-54.12H44.57V215.2H66.29C96,215.2,111.89,196.72,111.89,162.52Z"
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
@props:ariaLabel: any = 'logo designernews';
-->

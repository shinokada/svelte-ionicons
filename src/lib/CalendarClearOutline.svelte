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
  <rect
    fill="none"
    stroke="currentColor"
    stroke-linejoin="round"
    stroke-width="32"
    x="48"
    y="80"
    width="416"
    height="384"
    rx="48"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-linejoin="round"
    stroke-width="32"
    stroke-linecap="round"
    x1="128"
    y1="48"
    x2="128"
    y2="80"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-linejoin="round"
    stroke-width="32"
    stroke-linecap="round"
    x1="384"
    y1="48"
    x2="384"
    y2="80"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-linejoin="round"
    stroke-width="32"
    stroke-linecap="round"
    x1="464"
    y1="160"
    x2="48"
    y2="160"
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

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
    d="M417.84,448a16,16,0,0,1-11.35-4.72L40.65,75.28a16,16,0,1,1,22.7-22.56l365.83,368A16,16,0,0,1,417.84,448Z"
  /><path
    d="M364.92,80c-44.09,0-74.61,24.82-92.39,45.5a6,6,0,0,1-9.06,0C245.69,104.82,215.16,80,171.08,80a107.71,107.71,0,0,0-31,4.54l269.13,270.7c3-3.44,5.7-6.64,8.14-9.6,40-48.75,59.15-98.79,58.61-153C475.37,130.53,425.54,80,364.92,80Z"
  /><path
    d="M69,149.15a115.06,115.06,0,0,0-9,43.49c-.54,54.21,18.63,104.25,58.61,153,18.77,22.87,52.8,59.45,131.39,112.8a31.88,31.88,0,0,0,36,0c20.35-13.82,37.7-26.5,52.58-38.12Z"
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

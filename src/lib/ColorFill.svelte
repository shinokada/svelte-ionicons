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
    ariaLabel = 'color fill',
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
    d="M416,480c-35.29,0-64-29.11-64-64.88,0-33.29,28.67-65.4,44.08-82.64,1.87-2.1,3.49-3.91,4.68-5.31a19.94,19.94,0,0,1,30.55,0c1.13,1.31,2.63,3,4.36,4.93,15.5,17.3,44.33,49.51,44.33,83.05C480,450.89,451.29,480,416,480Z"
  /><path
    d="M398.23,276.64,166.89,47.22a52.1,52.1,0,0,0-73.6,0l-4.51,4.51A53.2,53.2,0,0,0,72.89,89.06,51.66,51.66,0,0,0,88.14,126l41.51,41.5L45,252a44.52,44.52,0,0,0-13,32,42.81,42.81,0,0,0,13.5,30.84l131.24,126a44,44,0,0,0,61.08-.18L361.93,320.38a15.6,15.6,0,0,1,8.23-4.29,69.21,69.21,0,0,1,11.93-.86h.3a22.53,22.53,0,0,0,15.84-38.59ZM152.29,144.85l-41.53-41.52a20,20,0,0,1,0-28.34l5.16-5.15a20.07,20.07,0,0,1,28.39,0L186,111.21Z"
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
@props:ariaLabel: any = 'color fill';
-->

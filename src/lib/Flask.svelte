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
    ariaLabel = 'flask',
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
    d="M452.32,365,327.4,167.12A48.07,48.07,0,0,1,320,141.48V64h15.56c8.61,0,16-6.62,16.43-15.23A16,16,0,0,0,336,32H176.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,176,64h16v77.48a47.92,47.92,0,0,1-7.41,25.63L59.68,365a74,74,0,0,0-2.5,75.84C70.44,465.19,96.36,480,124.13,480H387.87c27.77,0,53.69-14.81,66.95-39.21A74,74,0,0,0,452.32,365ZM211.66,184.2A79.94,79.94,0,0,0,224,141.48V68a4,4,0,0,1,4-4h56a4,4,0,0,1,4,4v73.48a79.94,79.94,0,0,0,12.35,42.72l57.8,91.53A8,8,0,0,1,351.37,288H160.63a8,8,0,0,1-6.77-12.27Z"
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
@props:ariaLabel: any = 'flask';
-->

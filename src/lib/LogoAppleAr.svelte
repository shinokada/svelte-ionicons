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
    ariaLabel = 'logo apple ar',
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
  <polyline
    points="201.14 64 256 32 310.86 64"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
  /><line
    x1="256"
    y1="32"
    x2="256"
    y2="112"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
  /><polyline
    points="310.86 448 256 480 201.14 448"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
  /><line
    x1="256"
    y1="480"
    x2="256"
    y2="400"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
  /><polyline
    points="64 207.51 64 144 117.15 112.49"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
  /><line
    x1="64"
    y1="144"
    x2="131.29"
    y2="184"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
  /><polyline
    points="448 304.49 448 368 394.85 399.51"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
  /><line
    x1="448"
    y1="368"
    x2="380.71"
    y2="328"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
  /><polyline
    points="117.15 400 64 368 64 304.49"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
  /><line
    x1="64"
    y1="368"
    x2="130.64"
    y2="328"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
  /><polyline
    points="394.85 112.49 448 144 448 207.51"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
  /><line
    x1="448"
    y1="144"
    x2="380.71"
    y2="184"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
  /><polyline
    points="256 320 256 256 310.86 224"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
  /><line
    x1="256"
    y1="256"
    x2="201.14"
    y2="224"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
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
@props:ariaLabel: any = 'logo apple ar';
-->

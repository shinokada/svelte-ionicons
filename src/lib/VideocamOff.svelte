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
    ariaLabel = 'videocam off',
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
    d="M336,179.52A67.52,67.52,0,0,0,268.48,112h-79.2a4,4,0,0,0-2.82,6.83L329.17,261.54a4,4,0,0,0,6.83-2.82Z"
  /><path
    d="M16,180V332a68,68,0,0,0,68,68H268a67.66,67.66,0,0,0,42.84-15.24,4,4,0,0,0,.33-6L54.41,122a4,4,0,0,0-4.87-.62A68,68,0,0,0,16,180Z"
  /><path
    d="M464,384.39a32,32,0,0,1-13-2.77,15.77,15.77,0,0,1-2.71-1.54l-82.71-58.22h0A32,32,0,0,1,352,295.7V216.3a32,32,0,0,1,13.58-26.16l82.71-58.22a15.77,15.77,0,0,1,2.71-1.54,32,32,0,0,1,45,29.24V352.38a32,32,0,0,1-32,32Z"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
    x1="416"
    y1="416"
    x2="80"
    y2="80"
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
@props:ariaLabel: any = 'videocam off';
-->

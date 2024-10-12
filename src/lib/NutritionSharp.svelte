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
    ariaLabel = 'nutrition sharp',
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
    d="M438.71,159.43c-17.6-28.31-45.5-43.8-85.28-47.37-22.82-2-50.23,4.94-72.25,10.55C271.26,125.14,260,128,256,128s-15.18-2.86-25-5.39c-22.08-5.65-49.56-12.69-72.45-10.54-38.53,3.61-66,19.19-84,47.62S48,229,48,288c0,61.28,29.53,114.58,47.13,140.89C116.82,461.34,149.25,496,175.2,496c18.57,0,34.12-7.23,47.82-13.64C243,473,256,472,256,472s11,0,31.94,10.11C301.65,488.73,317.3,496,336.8,496c26.58,0,59.08-34.69,80.63-67.15C434.82,402.65,464,349.52,464,288,464,228,456,187.17,438.71,159.43ZM216,352c-13.25,0-24-21.49-24-48s10.75-48,24-48,24,21.49,24,48S229.25,352,216,352Zm80,0c-13.25,0-24-21.49-24-48s10.75-48,24-48,24,21.49,24,48S309.25,352,296,352Z"
  /><path
    d="M323.72,82.76C353.68,52.82,352,16.18,352,16.14h0s-35.77-3.76-67.23,27.67S256.06,112,256.06,112,293.74,112.71,323.72,82.76Z"
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
@props:ariaLabel: any = 'nutrition sharp';
-->

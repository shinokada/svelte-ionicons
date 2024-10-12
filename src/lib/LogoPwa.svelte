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
    ariaLabel = 'logo pwa',
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
    d="M330.7,352l77.72-192H356.9L303.74,284.07,265.93,160H226.32L185.74,284.07l-28.63-56.53L131.21,307l26.3,45h50.7l36.68-111.27,35,111.27Z"
  /><path
    d="M48.79,286.09H80.44a93.39,93.39,0,0,0,25.62-3.21l8.18-25.19,22.88-70.39a55.75,55.75,0,0,0-6-7.82Q113.54,160,79.59,160H0V352H48.79Zm41.9-81.92q6.89,6.92,6.88,18.52t-6,18.53q-6.64,7.62-24.44,7.61H48.79V197.25H67.21q16.59,0,23.48,6.92ZM376.85,317.61l14.79-37.25h42.69l-20.26-56.51L439.41,160,512,352H458.47l-12.4-34.39Z"
  />
</svg>

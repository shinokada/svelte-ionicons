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
    ariaLabel = 'bonfire outline',
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
    d="M273.38,368.33c-.81-9.23-8.86-16.44-18.55-16.44A18.63,18.63,0,0,0,236.63,366h0l-18.2,88.38a35.75,35.75,0,0,0-.93,7.88c0,19.93,16.68,33.78,37.33,33.78s37.34-13.85,37.34-33.78a36.16,36.16,0,0,0-1.29-9.45Z"
  /><path
    d="M411.05,407.86a41.78,41.78,0,0,0-5.95-4.35l-69.53-48.59c-6.77-4.25-14-4.13-19.25,1a13.53,13.53,0,0,0-2,17.2l52.5,69a36.57,36.57,0,0,0,4,4.69c9.1,10.17,29.28,10.73,40.37,0C422.13,435.9,422,416.46,411.05,407.86Z"
  /><path
    d="M463.3,335.88H392.88c-4.55,0-8.88,3.35-8.88,8.16s2.95,7.85,6.92,9.16l66.43,20.55C467,376,480,367.4,480,356.66,480,343,472.4,335.88,463.3,335.88Z"
  /><path
    d="M128.22,344c0-5-4.55-8.16-9.45-8.16H48.35c-8.87,0-16.35,9.58-16.35,20.32S44.62,376,54.3,373.75l67.43-20.55C126.12,351.89,128.22,349,128.22,344Z"
  /><path
    d="M176.55,355,107,403.38a32.34,32.34,0,0,0-6,4.35,26.33,26.33,0,0,0,0,38.56,29.39,29.39,0,0,0,40.36,0,30.75,30.75,0,0,0,4-4.68L197.9,373c3.5-5.58,2.92-12.49-2-17.06A15,15,0,0,0,176.55,355Z"
  /><path
    d="M368,125.09c0-55.7-49.22-89.16-94.2-93.06a8,8,0,0,0-8.69,7.71c-3.12,76-109.38,110.69-119.87,178.68-7,45.4,16.65,72.37,34.31,85.78a15.94,15.94,0,0,0,23.93-5.62c22.5-45.86,74.33-63.49,109.72-85.94C356.08,185.44,368,156.2,368,125.09Z"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M240,95.7c-12.82-23-30.51-31-59.16-31.63a3.86,3.86,0,0,0-4.06,3.51C175.83,101.8,144,112.43,144,140.73c0,19.37,5.39,29,17.16,39.28"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M352.45,178.76c8.6,14.31,15.55,30.08,15.55,48,0,52.52-42.47,93.1-94.86,93.1a94.42,94.42,0,0,1-65.14-26"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
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
@props:ariaLabel: any = 'bonfire outline';
-->

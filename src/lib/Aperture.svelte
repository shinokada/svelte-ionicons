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
    ariaLabel = 'aperture',
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
    d="M250.54,129.17l-67.8-67.8A209.65,209.65,0,0,0,86.32,136h161.4A4,4,0,0,0,250.54,129.17Z"
  /><path
    d="M167.72,168H67.63A207.34,207.34,0,0,0,51.48,293.9L170.54,174.83A4,4,0,0,0,167.72,168Z"
  /><path
    d="M344,167.72V67.56A207.82,207.82,0,0,0,218.11,51.48L337.17,170.54A4,4,0,0,0,344,167.72Z"
  /><path
    d="M460.52,218.1,341.46,337.17a4,4,0,0,0,2.82,6.83H444.37a207.34,207.34,0,0,0,16.15-125.9Z"
  /><path
    d="M382.83,250.54l67.83-67.82A209.08,209.08,0,0,0,376,86.2V247.72A4,4,0,0,0,382.83,250.54Z"
  /><path
    d="M221.68,341.77a8,8,0,0,0,5.54,2.23h59.66a8,8,0,0,0,5.7-2.39l49.18-50a8,8,0,0,0,2.3-5.62L344,225.18a8,8,0,0,0-2.38-5.69l-50-49.25a8,8,0,0,0-5.63-2.3l-60.84.06a8,8,0,0,0-5.69,2.38l-49.25,50a8,8,0,0,0-2.3,5.63l.06,60.78a8,8,0,0,0,2.45,5.76Z"
  /><path
    d="M261.46,382.83l67.8,67.8A209.65,209.65,0,0,0,425.68,376H264.28A4,4,0,0,0,261.46,382.83Z"
  /><path
    d="M168,344.28V444.44a207.82,207.82,0,0,0,125.89,16.08L174.83,341.46A4,4,0,0,0,168,344.28Z"
  /><path
    d="M129.17,261.46,61.34,329.29A209.1,209.1,0,0,0,136,425.8V264.28A4,4,0,0,0,129.17,261.46Z"
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
@props:ariaLabel: any = 'aperture';
-->

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
    ariaLabel = 'chatbubbles sharp',
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
    d="M448,312.43c.77-1.11,1.51-2.26,2.27-3.34A174.55,174.55,0,0,0,480,211.85C480.32,112.55,396.54,32,292.94,32c-90.36,0-165.74,61.49-183.4,143.12a172.81,172.81,0,0,0-4,36.83c0,99.4,80.56,182.11,184.16,182.11,16.47,0,38.66-4.95,50.83-8.29s24.23-7.75,27.35-8.94,8-2.41,11.89-1.29l77.42,22.38a4,4,0,0,0,5-4.86l-17.72-67.49C443.24,320.57,443.08,319.63,448,312.43Z"
  /><path
    d="M312.54,415.38a165.32,165.32,0,0,1-23.26,2.05c-42.43,0-82.5-11.2-115-32.2a184.09,184.09,0,0,1-53.09-49.32C95.11,301.34,80.89,257.4,80.89,211.42c0-3.13.11-6.14.22-9.16a4.34,4.34,0,0,0-7.54-3.12A158.76,158.76,0,0,0,58.71,394.38c2.47,3.77,3.87,6.68,3.44,8.62L48.06,475.26a4,4,0,0,0,5.22,4.53l68-24.24a16.85,16.85,0,0,1,12.92.22c20.35,8,42.86,12.92,65.37,12.92a169.45,169.45,0,0,0,116.63-46A4.29,4.29,0,0,0,312.54,415.38Z"
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
@props:ariaLabel: any = 'chatbubbles sharp';
-->

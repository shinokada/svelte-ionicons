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
    ariaLabel = 'bed',
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
    d="M432,230.7a79.44,79.44,0,0,0-32-6.7H112a79.51,79.51,0,0,0-32,6.69h0A80.09,80.09,0,0,0,32,304V416a16,16,0,0,0,32,0v-8a8.1,8.1,0,0,1,8-8H440a8.1,8.1,0,0,1,8,8v8a16,16,0,0,0,32,0V304A80.09,80.09,0,0,0,432,230.7Z"
  /><path
    d="M376,80H136a56,56,0,0,0-56,56v72a4,4,0,0,0,5.11,3.84A95.5,95.5,0,0,1,112,208h4.23a4,4,0,0,0,4-3.55A32,32,0,0,1,152,176h56a32,32,0,0,1,31.8,28.45,4,4,0,0,0,4,3.55h24.46a4,4,0,0,0,4-3.55A32,32,0,0,1,304,176h56a32,32,0,0,1,31.8,28.45,4,4,0,0,0,4,3.55H400a95.51,95.51,0,0,1,26.89,3.85A4,4,0,0,0,432,208V136A56,56,0,0,0,376,80Z"
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
@props:ariaLabel: any = 'bed';
-->

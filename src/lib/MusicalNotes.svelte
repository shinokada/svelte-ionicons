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
    ariaLabel = 'musical notes',
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
    d="M421.84,37.37a25.86,25.86,0,0,0-22.6-4.46L199.92,86.49A32.3,32.3,0,0,0,176,118v226c0,6.74-4.36,12.56-11.11,14.83l-.12.05-52,18C92.88,383.53,80,402,80,423.91a55.54,55.54,0,0,0,23.23,45.63A54.78,54.78,0,0,0,135.34,480a55.82,55.82,0,0,0,17.75-2.93l.38-.13L175.31,469A47.84,47.84,0,0,0,208,423.91v-212c0-7.29,4.77-13.21,12.16-15.07l.21-.06L395,150.14a4,4,0,0,1,5,3.86V295.93c0,6.75-4.25,12.38-11.11,14.68l-.25.09-50.89,18.11A49.09,49.09,0,0,0,304,375.92a55.67,55.67,0,0,0,23.23,45.8,54.63,54.63,0,0,0,49.88,7.35l.36-.12L399.31,421A47.83,47.83,0,0,0,432,375.92V58A25.74,25.74,0,0,0,421.84,37.37Z"
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
@props:ariaLabel: any = 'musical notes';
-->

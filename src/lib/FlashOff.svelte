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
    ariaLabel = 'flash off',
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
    d="M432,448a15.92,15.92,0,0,1-11.31-4.69l-352-352A16,16,0,0,1,91.31,68.69l352,352A16,16,0,0,1,432,448Z"
  /><path
    d="M431.5,204A16,16,0,0,0,416,192H307.19L335.4,37.63c.05-.3.1-.59.13-.89A18.45,18.45,0,0,0,302.73,23L210.15,137.46a4,4,0,0,0,.29,5.35l151,151a4,4,0,0,0,5.94-.31l60.8-75.16A16.37,16.37,0,0,0,431.5,204Z"
  /><path
    d="M301.57,369.19l-151-151a4,4,0,0,0-5.93.31L83.8,293.64A16.37,16.37,0,0,0,80.5,308,16,16,0,0,0,96,320H204.83L176.74,474.36l0,.11A18.37,18.37,0,0,0,209.24,489l92.61-114.46A4,4,0,0,0,301.57,369.19Z"
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
@props:ariaLabel: any = 'flash off';
-->

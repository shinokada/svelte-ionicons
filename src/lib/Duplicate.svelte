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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
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
    d="M408,112H184a72,72,0,0,0-72,72V408a72,72,0,0,0,72,72H408a72,72,0,0,0,72-72V184A72,72,0,0,0,408,112ZM375.55,312H312v63.55c0,8.61-6.62,16-15.23,16.43A16,16,0,0,1,280,376V312H216.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,216,280h64V216.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,312,216v64h64a16,16,0,0,1,16,16.77C391.58,305.38,384.16,312,375.55,312Z"
  /><path
    d="M395.88,80A72.12,72.12,0,0,0,328,32H104a72,72,0,0,0-72,72V328a72.12,72.12,0,0,0,48,67.88V160a80,80,0,0,1,80-80Z"
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
@props:focusable: any = 'false';
@props:ariaLabel: any;
-->

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
    ariaLabel = 'megaphone sharp',
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
    d="M128,144V476a4,4,0,0,0,4,4H232.07a8,8,0,0,0,7.82-9.7L208.71,352H232a8,8,0,0,0,8-8V144Z"
  /><path
    d="M452.18,186.55,448,185.5V36a4,4,0,0,0-4-4H401.5a4,4,0,0,0-2.63,1L272,144V304L398.87,415a4,4,0,0,0,2.63,1H444a4,4,0,0,0,4-4V262.5l4.18-1.05C461.8,258.84,480,247.67,480,224S461.8,189.16,452.18,186.55Z"
  /><path
    d="M96,144H52a4,4,0,0,0-4,4v35.59a43,43,0,0,0-4.24,4.35C38.4,194.32,32,205.74,32,224c0,20.19,7.89,33.13,16,40.42V300a4,4,0,0,0,4,4H96Z"
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
@props:ariaLabel: any = 'megaphone sharp';
-->

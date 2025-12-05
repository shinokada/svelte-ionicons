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

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
    d="M242.764 123.636L421.455 123.636C432.738 123.636 443.56 128.119 451.539 136.098C459.518 144.076 464 154.898 464 166.182L464 421.455C464 432.738 459.518 443.56 451.539 451.539C443.56 459.518 432.738 464 421.455 464L166.182 464C154.898 464 144.076 459.518 136.098 451.539C128.119 443.56 123.636 432.738 123.636 421.455L123.636 242.764"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M180.364 48L47.9999 48L48 180.364"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M296 296L48 48"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
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

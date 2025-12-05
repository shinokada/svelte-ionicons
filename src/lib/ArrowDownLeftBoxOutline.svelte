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
    d="M123.636 269.236L123.636 90.5454C123.636 79.2617 128.119 68.4401 136.098 60.4613C144.076 52.4824 154.898 48 166.182 48L421.455 48C432.738 48 443.56 52.4824 451.539 60.4613C459.518 68.4401 464 79.2617 464 90.5454L464 345.818C464 357.102 459.518 367.924 451.539 375.902C443.56 383.881 432.738 388.364 421.455 388.364L242.764 388.364"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M48 331.636L48 464L180.364 464"
    stroke="black"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M296 216L48 464"
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

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
    ariaLabel = 'hand left sharp',
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
    d="M429.58,209.08h0c-15.06-6.62-32.38,1.31-38.5,17.62L356,312H344.73V80c0-17.6-13.3-32-29.55-32h0c-16.26,0-29.55,14.4-29.55,32V231.75l-14.78.25V32c0-17.6-13.3-32-29.55-32h0c-16.25,0-29.55,14.4-29.55,32V231.75L197,232V64c0-17.6-13.3-32-29.55-32h0c-16.26,0-29.55,14.4-29.55,32V247.75L123.1,248V128c0-17.6-13.3-32-29.55-32h0C77.3,96,64,110.4,64,128V344c0,75.8,37.13,168,169,168,40.8,0,79.42-7,100.66-21a121.41,121.41,0,0,0,33.72-33.31,138,138,0,0,0,16-31.78l62.45-175.14C452,234.46,444.64,215.71,429.58,209.08Z"
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
@props:ariaLabel: any = 'hand left sharp';
-->

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
    d="M336,264.13V436c0,24.3-19.05,44-42.95,44H107C83.05,480,64,460.3,64,436V172a44.26,44.26,0,0,1,44-44h94.12a24.55,24.55,0,0,1,17.49,7.36l109.15,111A25.4,25.4,0,0,1,336,264.13Z"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M200,128V236a28.34,28.34,0,0,0,28,28H336"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M176,128V76a44.26,44.26,0,0,1,44-44h94a24.83,24.83,0,0,1,17.61,7.36l109.15,111A25.09,25.09,0,0,1,448,168V340c0,24.3-19.05,44-42.95,44H344"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M312,32V140a28.34,28.34,0,0,0,28,28H448"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
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

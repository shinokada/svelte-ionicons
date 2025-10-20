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
    d="M352,200V440a40.12,40.12,0,0,1-40,40H136a40.12,40.12,0,0,1-40-40V224"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M352,224h40a56.16,56.16,0,0,1,56,56v80a56.16,56.16,0,0,1-56,56H352"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
  /><line
    x1="224"
    y1="256"
    x2="224"
    y2="416"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="288"
    y1="256"
    x2="288"
    y2="416"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="160"
    y1="256"
    x2="160"
    y2="416"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M320,112a48,48,0,0,1,0,96c-13.25,0-29.31-7.31-38-16H160c-8,22-27,32-48,32a48,48,0,0,1,0-96,47.91,47.91,0,0,1,26,9"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M91.86,132.43a40,40,0,1,1,60.46-52S160,91,160,96"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M145.83,64.71C163.22,44.89,187.57,32,216,32c52.38,0,94,42.84,94,95.21A95,95,0,0,1,308.33,145"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
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

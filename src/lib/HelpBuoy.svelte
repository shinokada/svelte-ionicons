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
    d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM192.13,260.18a64,64,0,1,1,59.69,59.69A64.07,64.07,0,0,1,192.13,260.18Zm240-66.64-96.37,5.84a4.06,4.06,0,0,1-3.44-1.59,96,96,0,0,0-18.07-18.07,4.06,4.06,0,0,1-1.59-3.44l5.84-96.37a4,4,0,0,1,5.42-3.51A193,193,0,0,1,435.6,188.12,4,4,0,0,1,432.09,193.54ZM193.54,79.91l5.84,96.37a4.06,4.06,0,0,1-1.59,3.44,96,96,0,0,0-18.07,18.07,4.06,4.06,0,0,1-3.44,1.59l-96.37-5.84a4,4,0,0,1-3.51-5.42A193,193,0,0,1,188.12,76.4,4,4,0,0,1,193.54,79.91ZM79.91,318.46l96.37-5.84a4.06,4.06,0,0,1,3.44,1.59,96,96,0,0,0,18.07,18.07,4.06,4.06,0,0,1,1.59,3.44l-5.84,96.37a4,4,0,0,1-5.42,3.51A193,193,0,0,1,76.4,323.88,4,4,0,0,1,79.91,318.46ZM318.46,432.09l-5.84-96.37a4.06,4.06,0,0,1,1.59-3.44,96,96,0,0,0,18.07-18.07,4.06,4.06,0,0,1,3.44-1.59l96.37,5.84a4,4,0,0,1,3.51,5.42A193,193,0,0,1,323.88,435.6,4,4,0,0,1,318.46,432.09Z"
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

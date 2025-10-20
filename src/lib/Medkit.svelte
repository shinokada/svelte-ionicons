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
  <path d="M336,64H176a16,16,0,0,0-16,16V96H352V80A16,16,0,0,0,336,64Z" style="fill:none" /><path
    d="M432,96H384V80a48.05,48.05,0,0,0-48-48H176a48.05,48.05,0,0,0-48,48V96H80a64.07,64.07,0,0,0-64,64V416a64,64,0,0,0,64,64H432a64,64,0,0,0,64-64V160A64.07,64.07,0,0,0,432,96ZM336,304H272v64a16,16,0,0,1-32,0V304H176a16,16,0,0,1,0-32h64V208a16,16,0,0,1,32,0v64h64a16,16,0,0,1,0,32ZM352,96H160V80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z"
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

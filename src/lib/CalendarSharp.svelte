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
    d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V176H32ZM352,212a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H356a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H356a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Z"
  /><path
    d="M456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480V87.77A23.8,23.8,0,0,0,456,64Z"
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

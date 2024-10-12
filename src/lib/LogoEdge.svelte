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
    ariaLabel = 'logo edge',
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
    d="M255.5,15h0c-132,0-240,108-240,240s108,240,240,240h0c85.4,0,160.8-45.2,203.3-112.9a6.87,6.87,0,0,0-9.1-9.7,108.64,108.64,0,0,1-18.4,8.6c-36.8,12.6-57.1,13.1-82.1,12-27.9-1.2-61.9-10.8-85.8-25s-43.5-34.6-54.1-52.3-17-39.9-14.1-68.3c2.9-29,29.4-52.6,60.4-52.6h0c33.5,0,60.8,26.6,60.8,60.1,0,17-8.1,31.7-18.5,43.5h0c-2.3,2.1-7.6,9.7,5.8,20,15.9,12.2,51.6,18,79.9,16.6s59.1-12.6,80.2-34.8c16.8-17.7,31.8-46.1,31.8-77.4C495.5,97.7,379.5,15,255.5,15Z"
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
@props:ariaLabel: any = 'logo edge';
-->

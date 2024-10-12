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
    ariaLabel = 'bus',
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
    d="M400,32H112A48,48,0,0,0,64,80V400a47.91,47.91,0,0,0,16,35.74V454a26,26,0,0,0,26,26h28a26,26,0,0,0,26-26v-6H352v6a26,26,0,0,0,26,26h28a26,26,0,0,0,26-26V435.74A47.91,47.91,0,0,0,448,400V80A48,48,0,0,0,400,32ZM147.47,399.82a32,32,0,1,1,28.35-28.35A32,32,0,0,1,147.47,399.82ZM236,288H112a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16H236a4,4,0,0,1,4,4V284A4,4,0,0,1,236,288ZM256,96H112.46c-8.6,0-16-6.6-16.44-15.19A16,16,0,0,1,112,64H399.54c8.6,0,16,6.6,16.44,15.19A16,16,0,0,1,400,96H256Zm20,32H400a16,16,0,0,1,16,16V272a16,16,0,0,1-16,16H276a4,4,0,0,1-4-4V132A4,4,0,0,1,276,128Zm60.18,243.47a32,32,0,1,1,28.35,28.35A32,32,0,0,1,336.18,371.47Z"
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
@props:ariaLabel: any = 'bus';
-->

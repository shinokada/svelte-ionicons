<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'notifications off sharp',
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
  <rect
    x="240"
    y="-31.53"
    width="32"
    height="575.06"
    transform="translate(-106.04 256) rotate(-45)"
  /><path d="M256,480a80.09,80.09,0,0,0,73.3-48H182.7A80.09,80.09,0,0,0,256,480Z" /><path
    d="M112,227.47V288L64,352v48H332.12L115.87,183.75A236.75,236.75,0,0,0,112,227.47Z"
  /><path
    d="M448,352l-48-64V227.47C400,157,372.64,95.61,304,80l-8-48H216l-8,48a117.45,117.45,0,0,0-41.95,18.17l282,282Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

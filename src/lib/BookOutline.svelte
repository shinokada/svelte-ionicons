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
    ariaLabel = 'book outline',
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
    d="M256,160c16-63.16,76.43-95.41,208-96a15.94,15.94,0,0,1,16,16V368a16,16,0,0,1-16,16c-128,0-177.45,25.81-208,64-30.37-38-80-64-208-64-9.88,0-16-8.05-16-17.93V80A15.94,15.94,0,0,1,48,64C179.57,64.59,240,96.84,256,160Z"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="256"
    y1="160"
    x2="256"
    y2="448"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

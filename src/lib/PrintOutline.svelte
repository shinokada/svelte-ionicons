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
    ariaLabel = 'print outline',
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
    d="M384,368h24a40.12,40.12,0,0,0,40-40V168a40.12,40.12,0,0,0-40-40H104a40.12,40.12,0,0,0-40,40V328a40.12,40.12,0,0,0,40,40h24"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="128"
    y="240"
    width="256"
    height="208"
    rx="24.32"
    ry="24.32"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M384,128V104a40.12,40.12,0,0,0-40-40H168a40.12,40.12,0,0,0-40,40v24"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><circle cx="392" cy="184" r="24" />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

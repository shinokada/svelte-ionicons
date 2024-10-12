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
    ariaLabel = 'hardware chip sharp',
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
  <rect x="160" y="160" width="192" height="192" /><path
    d="M480,198V154H448V88a24,24,0,0,0-24-24H358V32H314V64H278V32H234V64H198V32H154V64H88A24,24,0,0,0,64,88v66H32v44H64v36H32v44H64v36H32v44H64v66a24,24,0,0,0,24,24h66v32h44V448h36v32h44V448h36v32h44V448h66a24,24,0,0,0,24-24V358h32V314H448V278h32V234H448V198ZM128,128H384V384H128Z"
  />
</svg>

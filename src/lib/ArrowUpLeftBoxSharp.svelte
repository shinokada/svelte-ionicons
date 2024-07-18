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
    ariaLabel = 'arrow up left box sharp',
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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M32.0001 31.9999L196.364 32L196.364 64L86.6274 63.9999L130.264 107.636H107.636V130.264L64.0001 86.6275L64.0001 196.364H32.0001L32.0001 31.9999ZM296 318.627L107.636 130.264L107.636 480L480 480L480 107.636L130.264 107.636L318.628 296L296 318.627Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->

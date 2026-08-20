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

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect x="80" y="16" width="96" height="96" rx="8" ry="8" /><rect
    x="208"
    y="16"
    width="96"
    height="96"
    rx="8"
    ry="8"
  /><rect x="336" y="16" width="96" height="96" rx="8" ry="8" /><rect
    x="80"
    y="144"
    width="96"
    height="96"
    rx="8"
    ry="8"
  /><rect x="208" y="144" width="96" height="96" rx="8" ry="8" /><rect
    x="336"
    y="144"
    width="96"
    height="96"
    rx="8"
    ry="8"
  /><rect x="80" y="272" width="96" height="96" rx="8" ry="8" /><rect
    x="208"
    y="272"
    width="96"
    height="96"
    rx="8"
    ry="8"
  /><rect x="208" y="400" width="96" height="96" rx="8" ry="8" /><rect
    x="336"
    y="272"
    width="96"
    height="96"
    rx="8"
    ry="8"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->

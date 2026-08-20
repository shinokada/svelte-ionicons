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
  <path
    d="M392,16H120A24,24,0,0,0,96,40V376a24,24,0,0,0,24,24H392a24,24,0,0,0,24-24V40A24,24,0,0,0,392,16ZM208,64h95.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,96H208.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,208,64ZM179.47,351.82a32,32,0,1,1,28.35-28.35A32,32,0,0,1,179.47,351.82Zm160,0a32,32,0,1,1,28.35-28.35A32,32,0,0,1,339.47,351.82ZM384,144v64H128V144Z"
  /><polygon
    points="298 416 329.37 448 182.63 448 214 416 170 416 89.43 496 134.63 496 150.63 480 361.37 480 377.37 496 422.67 496 343 416 298 416"
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

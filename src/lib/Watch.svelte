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
  <rect x="136" y="136" width="240" height="240" rx="56" ry="56" /><path
    d="M336,96V32a16,16,0,0,0-16-16H192a16,16,0,0,0-16,16V96a80.09,80.09,0,0,0-80,80V336a80.09,80.09,0,0,0,80,80v64a16,16,0,0,0,16,16H320a16,16,0,0,0,16-16V416a80.09,80.09,0,0,0,80-80V176A80.09,80.09,0,0,0,336,96Zm56,224a72.08,72.08,0,0,1-72,72H192a72.08,72.08,0,0,1-72-72V192a72.08,72.08,0,0,1,72-72H320a72.08,72.08,0,0,1,72,72Z"
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

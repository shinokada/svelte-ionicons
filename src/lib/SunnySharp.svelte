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
    ariaLabel = 'sunny sharp',
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
  <rect x="234" y="26" width="44" height="92" /><rect x="234" y="394" width="44" height="92" /><rect
    x="340.11"
    y="103.89"
    width="92"
    height="44"
    transform="translate(24.07 309.89) rotate(-45)"
  /><rect
    x="79.89"
    y="364.11"
    width="92"
    height="44"
    transform="translate(-236.14 202.1) rotate(-45)"
  /><rect x="394" y="234" width="92" height="44" /><rect
    x="26"
    y="234"
    width="92"
    height="44"
  /><rect
    x="364.11"
    y="340.11"
    width="44"
    height="92"
    transform="translate(-159.93 386.11) rotate(-45)"
  /><rect
    x="103.89"
    y="79.89"
    width="44"
    height="92"
    transform="translate(-52.15 125.89) rotate(-45)"
  /><path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z" />
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
@props:ariaLabel: any = 'sunny sharp';
-->

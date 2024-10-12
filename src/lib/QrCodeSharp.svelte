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
    ariaLabel = 'qr code sharp',
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
  <rect x="336" y="336" width="80" height="80" /><rect
    x="272"
    y="272"
    width="64"
    height="64"
  /><rect x="416" y="416" width="64" height="64" /><rect
    x="432"
    y="272"
    width="48"
    height="48"
  /><rect x="272" y="432" width="48" height="48" /><rect
    x="336"
    y="96"
    width="80"
    height="80"
  /><path d="M480,240H272V32H480ZM316,196H436V76H316Z" /><rect
    x="96"
    y="96"
    width="80"
    height="80"
  /><path d="M240,240H32V32H240ZM76,196H196V76H76Z" /><rect
    x="96"
    y="336"
    width="80"
    height="80"
  /><path d="M240,480H32V272H240ZM76,436H196V316H76Z" />
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
@props:ariaLabel: any = 'qr code sharp';
-->

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
    ariaLabel = 'basket',
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
    d="M424.11,192H360L268.8,70.4a16,16,0,0,0-25.6,0L152,192H87.89a32.57,32.57,0,0,0-32.62,32.44,30.3,30.3,0,0,0,1.31,9l46.27,163.14a50.72,50.72,0,0,0,48.84,36.91H360.31a51.21,51.21,0,0,0,49-36.86l46.33-163.36a15.62,15.62,0,0,0,.46-2.36l.53-4.93a13.3,13.3,0,0,0,.09-1.55A32.57,32.57,0,0,0,424.11,192ZM256,106.67,320,192H192Zm0,245a37.7,37.7,0,1,1,37.88-37.7A37.87,37.87,0,0,1,256,351.63Z"
  />
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
@props:ariaLabel: any = 'basket';
-->

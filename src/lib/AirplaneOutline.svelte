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
    ariaLabel = 'airplane outline',
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
    d="M407.72,224c-3.4,0-14.79.1-18,.3l-64.9,1.7a1.83,1.83,0,0,1-1.69-.9L193.55,67.56A9,9,0,0,0,186.89,64H160l73,161a2.35,2.35,0,0,1-2.26,3.35l-121.69,1.8a8.06,8.06,0,0,1-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29,0-1.1,1.21-.75,2.43L52.17,249.9a16.3,16.3,0,0,1,0,11.9L32.31,333c-.59,1.95-.52,3,1.77,3H52c8.14,0,9.25-1.06,13.41-6.3l37.7-45.7a8.19,8.19,0,0,1,6.6-3.1l120.68,2.7a2.7,2.7,0,0,1,2.43,3.74L160,448h26.64a9,9,0,0,0,6.65-3.55L323.14,287c.39-.6,2-.9,2.69-.9l63.9,1.7c3.3.2,14.59.3,18,.3C452,288.1,480,275.93,480,256S452.12,224,407.72,224Z"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
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
@props:ariaLabel: any = 'airplane outline';
-->

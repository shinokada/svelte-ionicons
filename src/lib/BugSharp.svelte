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
    ariaLabel = 'bug sharp',
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
    d="M480,304.13v-32H400V215.2c29.42-27.95,32-64.76,32-103.2V96H400v16c0,28-1.86,48.15-9.9,63.84C368,128,324.32,112,256,112c-39.8,0-75.19,7.06-100.43,24.32-14.9,10.19-25.2,24.91-32.7,39.72C114,160.57,112,140.82,112,112V96H80v16c0,37.44,2.59,73.36,32,101.2v58.93H32v32l80-.13c0,19,3.7,53.09,10.39,69.69C96.6,396.76,80,422.31,80,464v16h32V464c0-27.66,9.1-44.71,26.17-61.32C160,448,177,464,240,464V176h32V464c65,0,80-16,101.83-61.32C390.9,419.29,400,436.35,400,464v16h32V464c0-41.68-16.6-67.23-42.39-90.31C396.3,357.09,400,323,400,304Z"
  /><path
    d="M256,32c-48.06,0-96,0-96,84,26.12-14,59.35-20,96-20,24.09,0,46.09,2.65,65.39,8,10.75,3,24.66,8.71,30.61,12C352,32,304.06,32,256,32Z"
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
@props:ariaLabel: any = 'bug sharp';
-->

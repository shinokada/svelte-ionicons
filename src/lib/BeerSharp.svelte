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
    ariaLabel = 'beer sharp',
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
    d="M448,208H368v-5.74A63.93,63.93,0,0,0,321.65,96a111,111,0,0,0-27.59-47.29A108.62,108.62,0,0,0,216,16c-29.91,0-57.78,12.28-79,34.67a56,56,0,0,0-67.51,77.51c-1,.86-1.91,1.74-2.83,2.66A63.56,63.56,0,0,0,48,176.26,62.65,62.65,0,0,0,68.77,222.8,65,65,0,0,0,80,231V480a16,16,0,0,0,16,16H352a16,16,0,0,0,16-16V432h80a16,16,0,0,0,16-16V224A16,16,0,0,0,448,208ZM176,432H144V240h32Zm64,0H208V240h32Zm64,0H272V240h32Zm16-240c-8.33,0-20.55-5.18-26.69-11.31L288.63,176H148.79L145,186.53c-5.81,16-18.83,20.41-28.73,21.29a34.08,34.08,0,0,1-25.91-8.67,31,31,0,0,1-10.32-23,31.8,31.8,0,0,1,9.33-22.71c.16-.17.33-.32.5-.49A31.78,31.78,0,0,1,112,144c.09,0,9.12.34,16.4,5.8l12.8,9.6,19.2-25.6-12.8-9.6A63.69,63.69,0,0,0,112,112a64.79,64.79,0,0,0-14,1.55A24,24,0,0,1,139.4,89.87l.23.35.4.46a35.78,35.78,0,0,1,5,8.94l5.62,15,30-11.24-5.62-15a68.2,68.2,0,0,0-10-17.74c-.38-.52-.79-1-1.19-1.51C178.38,55.45,196.64,48,216,48a76.86,76.86,0,0,1,55.23,23.18A80.2,80.2,0,0,1,292.61,142l-3,15.72,31.43,6,3-15.72A111.78,111.78,0,0,0,326,128.57,32,32,0,0,1,320,192ZM432,400H368V240h64Z"
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
@props:ariaLabel: any = 'beer sharp';
-->

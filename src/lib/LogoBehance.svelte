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
    ariaLabel = 'logo behance',
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
  <path d="M344.1,233.6c-28.9,0-32.9,28.8-32.9,28.8h61.4S373,233.6,344.1,233.6Z" /><path
    d="M204.8,262.4H150.4v50h51.7c7.8-.2,22.4-2.4,22.4-24.3C224.5,262.1,204.8,262.4,204.8,262.4Z"
  /><path
    d="M256,32C132.3,32,32,132.3,32,256S132.3,480,256,480,480,379.7,480,256,379.7,32,256,32Zm47.2,137.6h77.1v23H303.2v-23Zm-39,120.8c0,57-59.4,55.2-59.4,55.2H107.6v-187h97.2c29.6,0,52.9,16.3,52.9,49.8S229.2,244,229.2,244C266.8,244,264.2,290.4,264.2,290.4Zm144.2-3.1H311.5c0,34.7,32.9,32.5,32.9,32.5,31.1,0,30-20.1,30-20.1h32.9c0,53.4-64,49.7-64,49.7-76.7,0-71.8-71.5-71.8-71.5s-.1-71.8,71.8-71.8C419,206.2,408.4,287.3,408.4,287.3Z"
  /><path
    d="M218,211.3c0-19.4-13.2-19.4-13.2-19.4H150.4v41.7h51C210.2,233.6,218,230.7,218,211.3Z"
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
@props:ariaLabel: any = 'logo behance';
-->

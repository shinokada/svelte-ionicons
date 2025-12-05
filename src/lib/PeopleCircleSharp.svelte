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

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
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
    d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm69.3,96.17a72.5,72.5,0,1,1-72.6,72.5A72.55,72.55,0,0,1,325.3,144.17ZM170.2,170.53a59.32,59.32,0,1,1-59.4,59.32A59.35,59.35,0,0,1,170.2,170.53Zm-75.85,155c24.5-13.29,55.87-19.94,75.85-19.94,15,0,34.32,3,53.33,10.2a133.05,133.05,0,0,0-34,27.11c-13.19,15-20.76,32.92-20.76,50.83v15A177.06,177.06,0,0,1,94.35,325.58ZM256,432a175.12,175.12,0,0,1-59.4-10.33V394.62c0-52.59,85.75-79.09,128.7-79.09,23,0,58.38,7.63,86.21,22.81A176.14,176.14,0,0,1,256,432Z"
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
@props:focusable: any = 'false';
@props:ariaLabel: any;
-->

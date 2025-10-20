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

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M480 331.636L480 464C480 468.243 478.314 472.313 475.314 475.314C472.313 478.314 468.243 480 464 480H331.636C322.8 480 315.636 472.837 315.636 464C315.636 455.163 322.8 448 331.636 448H425.373L374.245 396.872C378.961 394.253 383.333 390.972 387.216 387.089C391.054 383.251 394.304 378.935 396.908 374.281L448 425.373L448 331.636C448 322.8 455.163 315.636 464 315.636C472.837 315.636 480 322.8 480 331.636ZM396.908 374.281C401.754 365.621 404.364 355.79 404.364 345.691V90.5455C404.364 75.0182 398.195 60.127 387.216 49.1476C376.237 38.1682 361.345 32 345.818 32L90.5454 32C75.0182 32 60.1269 38.1682 49.1475 49.1476C38.1681 60.127 31.9999 75.0182 31.9999 90.5455V345.818C31.9999 361.345 38.1681 376.237 49.1475 387.216C60.1269 398.195 75.0182 404.364 90.5454 404.364H345.818C346.626 404.364 347.42 404.304 348.196 404.188C357.394 403.815 366.307 401.28 374.245 396.872L204.686 227.314C198.438 221.065 198.438 210.935 204.686 204.686C210.935 198.438 221.065 198.438 227.314 204.686L396.908 374.281Z"
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

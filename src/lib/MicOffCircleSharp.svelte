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
    ariaLabel = 'mic off circle sharp',
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
    d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm64,200.22V208h32v40.22a77.53,77.53,0,0,1-13.37,43.11L316,266.4A44.11,44.11,0,0,0,320,248.22ZM256,128h0a48.14,48.14,0,0,1,48,48v64a48.07,48.07,0,0,1-1.44,11.64l-89-97.92A48.13,48.13,0,0,1,256,128Zm48,256H208V352h32V334.26a103.71,103.71,0,0,1-49.21-23.38C170.94,293.83,160,271.58,160,248.22V208h32v40.22c0,25.66,28,55.48,64,55.48a56.91,56.91,0,0,0,7-.45l24.52,27a99.57,99.57,0,0,1-15.5,4V352h32ZM208.09,242.87l40.5,44.55A48.2,48.2,0,0,1,208.09,242.87ZM344.16,367.76l-200.5-218.5,23.68-21.52,200.5,218.5Z"
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
@props:ariaLabel: any = 'mic off circle sharp';
-->

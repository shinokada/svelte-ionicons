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
    ariaLabel = 'flower sharp',
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
  <circle cx="256" cy="256" r="43" /><path
    d="M475.93,303.91a67.49,67.49,0,0,0-47.62-115.6c-2.88,0-6.2.14-9.93.43,2.75-2.36,5.23-4.62,7.33-6.71A67.83,67.83,0,0,0,378,66.33h-.25a67.27,67.27,0,0,0-47.82,20c-2.11,2.11-4.37,4.59-6.72,7.33.29-3.75.44-7.07.44-9.93a67.69,67.69,0,1,0-135.38,0c0,2.87.15,6.19.44,9.93-2.36-2.74-4.62-5.22-6.72-7.33a67.27,67.27,0,0,0-47.82-20H134A67.9,67.9,0,0,0,86.29,182c2.1,2.09,4.58,4.35,7.34,6.72-3.74-.29-7.06-.44-9.94-.44a67.69,67.69,0,0,0,0,135.38c2.86,0,6.18-.15,9.93-.44-2.74,2.35-5.22,4.61-7.33,6.72a67.55,67.55,0,0,0,47.82,115.42h.25A67.32,67.32,0,0,0,182,425.71c2.09-2.1,4.35-4.58,6.71-7.33-.28,3.73-.43,7.05-.43,9.93a67.69,67.69,0,0,0,135.38,0c0-2.87-.15-6.19-.44-9.94,2.36,2.75,4.62,5.24,6.72,7.34a67.32,67.32,0,0,0,47.67,19.68h.25A67.5,67.5,0,0,0,425.71,330c-2.11-2.11-4.59-4.37-7.33-6.72,3.75.29,7.07.44,9.93.44A67.27,67.27,0,0,0,475.93,303.91ZM256,341a85,85,0,1,1,85-85A85.1,85.1,0,0,1,256,341Z"
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
@props:ariaLabel: any = 'flower sharp';
-->

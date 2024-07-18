<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'ear sharp',
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
    d="M380.48,68.09C347.09,34.5,302.88,16,256,16,159,16,80,95,80,192V398.57a97.59,97.59,0,0,0,28,68.49A94.49,94.49,0,0,0,176,496c19.93,0,41.06-7.69,62.8-22.87a181.46,181.46,0,0,0,25.88-21.86C327.37,390.16,432,288.06,432,192,432,145.51,413.71,101.51,380.48,68.09ZM368,200H336V184c0-39.7-35.89-72-80-72s-80,32.3-80,72v30.41c27.5-7.84,59.89-6.62,64.26-6.41a48,48,0,0,1,38.62,75.9c-.3.41-.61.81-.95,1.2-16.55,19-36,45.49-38.46,55l-4.07,15.47-30.94-8.14,4.07-15.47c5.51-20.94,36.93-58.2,44.66-67.15A16,16,0,0,0,239.82,240l-.88,0c-10.67-.58-42.66-.25-62.12,8l-.82.35V320H144V184c0-57.35,50.24-104,112-104s112,46.65,112,104Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
